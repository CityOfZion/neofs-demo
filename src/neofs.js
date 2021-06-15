import { base58_to_binary, binary_to_base58 } from 'base58-js';
import { fromByteArray } from 'base64-js';
import { sha512 } from 'js-sha512';
import { u, wallet } from '@cityofzion/neon-js';
import { v4 as uuidv4 } from 'uuid';

const {AccountingServiceClient} = require('./generated/accounting/service_grpc_web_pb');
const {ContainerServiceClient} = require('./generated/container/service_grpc_web_pb');
const {PutRequest, ListRequest, SetExtendedACLRequest, Container} = require('./generated/container/service_pb');
const {BalanceRequest} = require('./generated/accounting/service_pb');
const {EACLTable, EACLRecord, BearerToken, Role, Operation, Action} = require('./generated/acl/types_pb');
const {PlacementPolicy, Replica} = require('./generated/netmap/types_pb')
const {Signature, OwnerID, Version, ContainerID} = require('./generated/refs/types_pb');
const {RequestMetaHeader, RequestVerificationHeader} = require('./generated/session/service_pb');

// URL of envoy proxy instance
const grpcProxy = 'http://127.0.0.1:10000';

function rfc6979Sign(msg, account) {
    const sig = wallet.sign(u.ab2hexstring(msg), account.privateKey);
    const signature = new Signature();
    const b64Key = fromByteArray(u.hexstring2ab(account.publicKey));
    signature.setKey(b64Key);
    signature.setSign(fromByteArray(u.hexstring2ab(sig)));
    return signature;
  }
  
  function neofsSign(msg, account) {
      const curve = u.getCurve(u.EllipticCurvePreset.SECP256R1);
      const sig = curve.sign(u.ab2hexstring(sha512.digest(msg)), account.privateKey);
  
      const signature = new Signature();
      const b64Key = fromByteArray(u.hexstring2ab(account.publicKey));
      signature.setKey(b64Key);
      signature.setSign(fromByteArray(u.hexstring2ab('04' + sig.r + sig.s)));
      return signature;
  }
  
  function signRequest(to_sign, account) {
    if (to_sign.getMetaHeader() == null) {
      to_sign.setMetaHeader(new RequestMetaHeader());
    }
    const verify_origin = to_sign.getVerifyHeader();
    const meta_header = to_sign.getMetaHeader();
    const verify_header = new RequestVerificationHeader();
  
    if (verify_origin == null) {
      verify_header.setBodySignature(neofsSign(to_sign.getBody().serializeBinary(), account));
    }
  
    verify_header.setMetaSignature(neofsSign(meta_header.serializeBinary(), account));
  
    if (verify_origin == null) {
      verify_header.setOriginSignature(neofsSign(new RequestVerificationHeader().serializeBinary(), account));
    }
    else {
      verify_header.setOriginSignature(neofsSign(verify_origin.serializeBinary(), account));
    }
    verify_header.setOrigin(verify_origin);
    to_sign.setVerifyHeader(verify_header);
    return to_sign;
  }

  export function neofsGetBalance(ownerKey, cb, errorCb) {

    const client = new AccountingServiceClient(grpcProxy);
  
    const account = new wallet.Account(ownerKey);
    const address = account.address;
    const decoded = base58_to_binary(address);
  
    const ownerId = new OwnerID();
    ownerId.setValue(decoded);
  
    const requestBody = new BalanceRequest.Body();
    requestBody.setOwnerId(ownerId);
  
    const metaHeader = new RequestMetaHeader();
    metaHeader.setTtl(2);
  
    const request = new BalanceRequest();
    request.setBody(requestBody);
    request.setMetaHeader(metaHeader);
  
    const signedRequest = signRequest(request, account);
  
    client.balance(signedRequest, {}, (err, response) => {
      if (err) {
        console.error(err.message);
        errorCb(err.message);
      } else {
        const balance = response.getBody().getBalance().getValue() / 10 ** response.getBody().getBalance().getPrecision();
        //console.log('NeoFS contract balance is ' + balance);
        cb(balance);
      }
    });
  }

  export function neofsListContainers(ownerKey, cb, errorCb) {

    const client = new ContainerServiceClient(grpcProxy);
  
    const account = new wallet.Account(ownerKey);
    const address = account.address;
    const decoded = base58_to_binary(address);
  
    const ownerId = new OwnerID();
    ownerId.setValue(decoded);
  
    const requestBody = new ListRequest.Body();
    requestBody.setOwnerId(ownerId);
  
    const metaHeader = new RequestMetaHeader();
    metaHeader.setTtl(2);
  
    const request = new ListRequest();
    request.setBody(requestBody);
    request.setMetaHeader(metaHeader);
  
    const signedRequest = signRequest(request, account);
  
    client.list(signedRequest, {}, (err, response) => {
      if (err) {
        console.error(err.message);
        errorCb(err.message);
      } else {
        const containers = response.getBody().getContainerIdsList();
        const containerList = containers.map(c => binary_to_base58(c.getValue_asU8()));
        //console.log('NeoFS container list:' + JSON.stringify(containerList));
        cb(containerList);
      }
    });
  }

  export function neofsCreateRestrictedEacl(containerId) {
    const containerObj = new ContainerID();
    containerObj.setValue(base58_to_binary(containerId));

    const table = new EACLTable();

    const putRecord = new EACLRecord();
    const deleteRecord = new EACLRecord();

    const target = new EACLRecord.Target();
    target.setRole(Role.OTHERS);
    target.setKeysList([]);

    putRecord.setTargetsList([target]);
    putRecord.setOperation(Operation.PUT);
    putRecord.setAction(Action.DENY);

    deleteRecord.setTargetsList([target]);
    deleteRecord.setOperation(Operation.DELETE);
    deleteRecord.setAction(Action.DENY);

    const version = new Version();
    version.setMajor(2);
    version.setMinor(6);

    table.setRecordsList([putRecord, deleteRecord]);
    table.setVersion(version);
    table.setContainerId(containerObj);

    return table;
  }

  export function neofsCreateBearerTokenEacl(containerId) {
    // create an override EACL to send in a bearer token 
    
    const containerObj = new ContainerID();
    containerObj.setValue(base58_to_binary(containerId));

    const table = new EACLTable();
    const recordsList = [];
    // allow any bearer token holder to perform any operation
    for (let i in Operation) {
        if (Operation[i] !== Operation.OPERATION_UNSPECIFIED) {

            const record = new EACLRecord();
            const target = new EACLRecord.Target();

            target.setRole(Role.USER);
            target.setKeysList([]);

            record.setTargetsList([target]);
            record.setOperation(Operation[i]);
            record.setAction(Action.ALLOW);
            recordsList.push(record);
        }
    }
    // not sure why we need to add a DENY rule for each action
    // but the bearer token wouldn't work without it

    for (let i in Operation) {
        if (Operation[i] !== Operation.OPERATION_UNSPECIFIED) {

            const record = new EACLRecord();
            const target = new EACLRecord.Target();

            target.setRole(Role.USER);
            target.setKeysList([]);

            record.setTargetsList([target]);
            record.setOperation(Operation[i]);
            record.setAction(Action.DENY);
            recordsList.push(record);
        }
    }
    console.log("Done adding records...");

    const version = new Version();
    version.setMajor(2);
    version.setMinor(6);

    table.setRecordsList(recordsList);
    table.setVersion(version);
    table.setContainerId(containerObj);

    return table;
  }

  export function neofsCreateBearerToken(ownerKey, eaclTable) {
    const account = new wallet.Account(ownerKey);
    const address = account.address;
    const decoded = base58_to_binary(address);
  
    const ownerId = new OwnerID();
    ownerId.setValue(decoded);

    const token = new BearerToken();

    const body = new BearerToken.Body();
    const lifetime = new BearerToken.Body.TokenLifetime();
    lifetime.setExp(100500);
    lifetime.setNbf(1);
    lifetime.setIat(0);

    body.setEaclTable(eaclTable);
    //body.setOwnerId(null);
    body.setLifetime(lifetime);

    token.setBody(body);
    //token.setSignature(Rfc6979Sign(body.serializeBinary(), account));
    token.setSignature(neofsSign(body.serializeBinary(), account));

    return(fromByteArray(token.serializeBinary()));
  }

  export function neofsSetEacl(ownerKey, eaclTable, cb, errorCb) {
    const client = new ContainerServiceClient(grpcProxy);
  
    const account = new wallet.Account(ownerKey);
  
    const requestBody = new SetExtendedACLRequest.Body();
    requestBody.setEacl(eaclTable);
    requestBody.setSignature(rfc6979Sign(eaclTable.serializeBinary(), account))
  
    const metaHeader = new RequestMetaHeader();
    metaHeader.setTtl(2);
  
    const request = new SetExtendedACLRequest();
    request.setBody(requestBody);
    request.setMetaHeader(metaHeader);
  
    const signedRequest = signRequest(request, account);

    client.setExtendedACL(signedRequest, {}, (err, response) => {
        if (err) {
          console.error(err.message);
          errorCb(err.message);
        } else {
          // TODO: check EACL matches what we sent
          if (response.getBody()) {
            console.log(`Set EACL`);
            cb("Set EACL table for new container");
          } else {
            errorCb("Failed to set EACL table for new container");
          }
        }
      });
  }


  export function neofsPutContainer(ownerKey, cb, errorCb) {
    const client = new ContainerServiceClient(grpcProxy);
  
    const account = new wallet.Account(ownerKey);
    const address = account.address;
    const decoded = base58_to_binary(address);
  
    const ownerId = new OwnerID();
    ownerId.setValue(decoded);
  
    const version = new Version();
    version.setMajor(2);
    version.setMinor(6);
  
    const replica = new Replica();
    replica.setCount(3);
  
    const policy = new PlacementPolicy();
    policy.setReplicasList([replica]);
  
    const container = new Container();
  
    container.setOwnerId(ownerId);
    /*
    publicContainerACLRule   = 0x1FFFFFFF
	privateContainerACLRule  = 0x18888888
	readonlyContainerACLRule = 0x1FFF88FF
    bearerToken should use 0x0FFFCFFF
    */
    container.setBasicAcl(0x0FFFCFFF);
    container.setVersion(version);
    container.setPlacementPolicy(policy);
    
  
    const buffer = new Array(16);
    uuidv4(null, buffer, 0);
    container.setNonce(Uint8Array.from(buffer));
  
    const now = new Date()  
    const unixTime = Math.round(now.getTime() / 1000).toString();

    const attribute = new Container.Attribute();
    attribute.setKey('Timestamp');
    attribute.setValue(unixTime);
    container.setAttributesList([attribute])
  
    const requestBody = new PutRequest.Body();
    requestBody.setContainer(container);
    requestBody.setSignature(rfc6979Sign(container.serializeBinary(), account));
  
    const metaHeader = new RequestMetaHeader();
    metaHeader.setTtl(2);
    metaHeader.setVersion(version);
  
    const request = new PutRequest();
    request.setBody(requestBody);
    request.setMetaHeader(metaHeader);
  
    const signedRequest = signRequest(request, account);
  
    client.put(signedRequest, {}, (err, response) => {
      if (err) {
        console.error(err.message);
        errorCb(err.message);
      } else {
        const cid = response.getBody().getContainerId().getValue_asU8();
        const container_id = binary_to_base58(cid);
        console.log('New pending container ID is ' + container_id);
        cb(container_id);
      }
    });
  }

// package: neo.fs.v2.audit
// file: audit/types.proto

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";

export class DataAuditResult extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): refs_types_pb.Version | undefined;
  setVersion(value?: refs_types_pb.Version): void;

  getAuditEpoch(): number;
  setAuditEpoch(value: number): void;

  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): refs_types_pb.ContainerID | undefined;
  setContainerId(value?: refs_types_pb.ContainerID): void;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getComplete(): boolean;
  setComplete(value: boolean): void;

  getRequests(): number;
  setRequests(value: number): void;

  getRetries(): number;
  setRetries(value: number): void;

  clearPassSgList(): void;
  getPassSgList(): Array<refs_types_pb.ObjectID>;
  setPassSgList(value: Array<refs_types_pb.ObjectID>): void;
  addPassSg(value?: refs_types_pb.ObjectID, index?: number): refs_types_pb.ObjectID;

  clearFailSgList(): void;
  getFailSgList(): Array<refs_types_pb.ObjectID>;
  setFailSgList(value: Array<refs_types_pb.ObjectID>): void;
  addFailSg(value?: refs_types_pb.ObjectID, index?: number): refs_types_pb.ObjectID;

  getHit(): number;
  setHit(value: number): void;

  getMiss(): number;
  setMiss(value: number): void;

  getFail(): number;
  setFail(value: number): void;

  clearPassNodesList(): void;
  getPassNodesList(): Array<Uint8Array | string>;
  getPassNodesList_asU8(): Array<Uint8Array>;
  getPassNodesList_asB64(): Array<string>;
  setPassNodesList(value: Array<Uint8Array | string>): void;
  addPassNodes(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearFailNodesList(): void;
  getFailNodesList(): Array<Uint8Array | string>;
  getFailNodesList_asU8(): Array<Uint8Array>;
  getFailNodesList_asB64(): Array<string>;
  setFailNodesList(value: Array<Uint8Array | string>): void;
  addFailNodes(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAuditResult.AsObject;
  static toObject(includeInstance: boolean, msg: DataAuditResult): DataAuditResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataAuditResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAuditResult;
  static deserializeBinaryFromReader(message: DataAuditResult, reader: jspb.BinaryReader): DataAuditResult;
}

export namespace DataAuditResult {
  export type AsObject = {
    version?: refs_types_pb.Version.AsObject,
    auditEpoch: number,
    containerId?: refs_types_pb.ContainerID.AsObject,
    publicKey: Uint8Array | string,
    complete: boolean,
    requests: number,
    retries: number,
    passSgList: Array<refs_types_pb.ObjectID.AsObject>,
    failSgList: Array<refs_types_pb.ObjectID.AsObject>,
    hit: number,
    miss: number,
    fail: number,
    passNodesList: Array<Uint8Array | string>,
    failNodesList: Array<Uint8Array | string>,
  }
}


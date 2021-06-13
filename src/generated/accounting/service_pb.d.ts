// package: neo.fs.v2.accounting
// file: accounting/service.proto

import * as jspb from "google-protobuf";
import * as accounting_types_pb from "../accounting/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

export class BalanceRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): BalanceRequest.Body | undefined;
  setBody(value?: BalanceRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceRequest): BalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceRequest;
  static deserializeBinaryFromReader(message: BalanceRequest, reader: jspb.BinaryReader): BalanceRequest;
}

export namespace BalanceRequest {
  export type AsObject = {
    body?: BalanceRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasOwnerId(): boolean;
    clearOwnerId(): void;
    getOwnerId(): refs_types_pb.OwnerID | undefined;
    setOwnerId(value?: refs_types_pb.OwnerID): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Body.AsObject;
    static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Body;
    static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
  }

  export namespace Body {
    export type AsObject = {
      ownerId?: refs_types_pb.OwnerID.AsObject,
    }
  }
}

export class BalanceResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): BalanceResponse.Body | undefined;
  setBody(value?: BalanceResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceResponse): BalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceResponse;
  static deserializeBinaryFromReader(message: BalanceResponse, reader: jspb.BinaryReader): BalanceResponse;
}

export namespace BalanceResponse {
  export type AsObject = {
    body?: BalanceResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasBalance(): boolean;
    clearBalance(): void;
    getBalance(): accounting_types_pb.Decimal | undefined;
    setBalance(value?: accounting_types_pb.Decimal): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Body.AsObject;
    static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Body;
    static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
  }

  export namespace Body {
    export type AsObject = {
      balance?: accounting_types_pb.Decimal.AsObject,
    }
  }
}


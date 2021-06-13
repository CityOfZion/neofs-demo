// package: neo.fs.v2.session
// file: session/service.proto

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

export class CreateRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): CreateRequest.Body | undefined;
  setBody(value?: CreateRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    body?: CreateRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasOwnerId(): boolean;
    clearOwnerId(): void;
    getOwnerId(): refs_types_pb.OwnerID | undefined;
    setOwnerId(value?: refs_types_pb.OwnerID): void;

    getExpiration(): number;
    setExpiration(value: number): void;

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
      expiration: number,
    }
  }
}

export class CreateResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): CreateResponse.Body | undefined;
  setBody(value?: CreateResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    body?: CreateResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): void;

    getSessionKey(): Uint8Array | string;
    getSessionKey_asU8(): Uint8Array;
    getSessionKey_asB64(): string;
    setSessionKey(value: Uint8Array | string): void;

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
      id: Uint8Array | string,
      sessionKey: Uint8Array | string,
    }
  }
}


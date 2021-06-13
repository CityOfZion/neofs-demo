// package: neo.fs.v2.object
// file: object/service.proto

import * as jspb from "google-protobuf";
import * as object_types_pb from "../object/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

export class GetRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): GetRequest.Body | undefined;
  setBody(value?: GetRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    body?: GetRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): refs_types_pb.Address | undefined;
    setAddress(value?: refs_types_pb.Address): void;

    getRaw(): boolean;
    setRaw(value: boolean): void;

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
      address?: refs_types_pb.Address.AsObject,
      raw: boolean,
    }
  }
}

export class GetResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): GetResponse.Body | undefined;
  setBody(value?: GetResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    body?: GetResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasInit(): boolean;
    clearInit(): void;
    getInit(): GetResponse.Body.Init | undefined;
    setInit(value?: GetResponse.Body.Init): void;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): void;

    hasSplitInfo(): boolean;
    clearSplitInfo(): void;
    getSplitInfo(): object_types_pb.SplitInfo | undefined;
    setSplitInfo(value?: object_types_pb.SplitInfo): void;

    getObjectPartCase(): Body.ObjectPartCase;
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
      init?: GetResponse.Body.Init.AsObject,
      chunk: Uint8Array | string,
      splitInfo?: object_types_pb.SplitInfo.AsObject,
    }

    export class Init extends jspb.Message {
      hasObjectId(): boolean;
      clearObjectId(): void;
      getObjectId(): refs_types_pb.ObjectID | undefined;
      setObjectId(value?: refs_types_pb.ObjectID): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): refs_types_pb.Signature | undefined;
      setSignature(value?: refs_types_pb.Signature): void;

      hasHeader(): boolean;
      clearHeader(): void;
      getHeader(): object_types_pb.Header | undefined;
      setHeader(value?: object_types_pb.Header): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Init.AsObject;
      static toObject(includeInstance: boolean, msg: Init): Init.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Init, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Init;
      static deserializeBinaryFromReader(message: Init, reader: jspb.BinaryReader): Init;
    }

    export namespace Init {
      export type AsObject = {
        objectId?: refs_types_pb.ObjectID.AsObject,
        signature?: refs_types_pb.Signature.AsObject,
        header?: object_types_pb.Header.AsObject,
      }
    }

    export enum ObjectPartCase {
      OBJECT_PART_NOT_SET = 0,
      INIT = 1,
      CHUNK = 2,
      SPLIT_INFO = 3,
    }
  }
}

export class PutRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): PutRequest.Body | undefined;
  setBody(value?: PutRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutRequest): PutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutRequest;
  static deserializeBinaryFromReader(message: PutRequest, reader: jspb.BinaryReader): PutRequest;
}

export namespace PutRequest {
  export type AsObject = {
    body?: PutRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasInit(): boolean;
    clearInit(): void;
    getInit(): PutRequest.Body.Init | undefined;
    setInit(value?: PutRequest.Body.Init): void;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): void;

    getObjectPartCase(): Body.ObjectPartCase;
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
      init?: PutRequest.Body.Init.AsObject,
      chunk: Uint8Array | string,
    }

    export class Init extends jspb.Message {
      hasObjectId(): boolean;
      clearObjectId(): void;
      getObjectId(): refs_types_pb.ObjectID | undefined;
      setObjectId(value?: refs_types_pb.ObjectID): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): refs_types_pb.Signature | undefined;
      setSignature(value?: refs_types_pb.Signature): void;

      hasHeader(): boolean;
      clearHeader(): void;
      getHeader(): object_types_pb.Header | undefined;
      setHeader(value?: object_types_pb.Header): void;

      getCopiesNumber(): number;
      setCopiesNumber(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Init.AsObject;
      static toObject(includeInstance: boolean, msg: Init): Init.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Init, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Init;
      static deserializeBinaryFromReader(message: Init, reader: jspb.BinaryReader): Init;
    }

    export namespace Init {
      export type AsObject = {
        objectId?: refs_types_pb.ObjectID.AsObject,
        signature?: refs_types_pb.Signature.AsObject,
        header?: object_types_pb.Header.AsObject,
        copiesNumber: number,
      }
    }

    export enum ObjectPartCase {
      OBJECT_PART_NOT_SET = 0,
      INIT = 1,
      CHUNK = 2,
    }
  }
}

export class PutResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): PutResponse.Body | undefined;
  setBody(value?: PutResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutResponse): PutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResponse;
  static deserializeBinaryFromReader(message: PutResponse, reader: jspb.BinaryReader): PutResponse;
}

export namespace PutResponse {
  export type AsObject = {
    body?: PutResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasObjectId(): boolean;
    clearObjectId(): void;
    getObjectId(): refs_types_pb.ObjectID | undefined;
    setObjectId(value?: refs_types_pb.ObjectID): void;

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
      objectId?: refs_types_pb.ObjectID.AsObject,
    }
  }
}

export class DeleteRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): DeleteRequest.Body | undefined;
  setBody(value?: DeleteRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    body?: DeleteRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): refs_types_pb.Address | undefined;
    setAddress(value?: refs_types_pb.Address): void;

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
      address?: refs_types_pb.Address.AsObject,
    }
  }
}

export class DeleteResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): DeleteResponse.Body | undefined;
  setBody(value?: DeleteResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    body?: DeleteResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasTombstone(): boolean;
    clearTombstone(): void;
    getTombstone(): refs_types_pb.Address | undefined;
    setTombstone(value?: refs_types_pb.Address): void;

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
      tombstone?: refs_types_pb.Address.AsObject,
    }
  }
}

export class HeadRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): HeadRequest.Body | undefined;
  setBody(value?: HeadRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeadRequest): HeadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeadRequest;
  static deserializeBinaryFromReader(message: HeadRequest, reader: jspb.BinaryReader): HeadRequest;
}

export namespace HeadRequest {
  export type AsObject = {
    body?: HeadRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): refs_types_pb.Address | undefined;
    setAddress(value?: refs_types_pb.Address): void;

    getMainOnly(): boolean;
    setMainOnly(value: boolean): void;

    getRaw(): boolean;
    setRaw(value: boolean): void;

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
      address?: refs_types_pb.Address.AsObject,
      mainOnly: boolean,
      raw: boolean,
    }
  }
}

export class HeaderWithSignature extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): object_types_pb.Header | undefined;
  setHeader(value?: object_types_pb.Header): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): refs_types_pb.Signature | undefined;
  setSignature(value?: refs_types_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderWithSignature.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderWithSignature): HeaderWithSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderWithSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderWithSignature;
  static deserializeBinaryFromReader(message: HeaderWithSignature, reader: jspb.BinaryReader): HeaderWithSignature;
}

export namespace HeaderWithSignature {
  export type AsObject = {
    header?: object_types_pb.Header.AsObject,
    signature?: refs_types_pb.Signature.AsObject,
  }
}

export class HeadResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): HeadResponse.Body | undefined;
  setBody(value?: HeadResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeadResponse): HeadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeadResponse;
  static deserializeBinaryFromReader(message: HeadResponse, reader: jspb.BinaryReader): HeadResponse;
}

export namespace HeadResponse {
  export type AsObject = {
    body?: HeadResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): HeaderWithSignature | undefined;
    setHeader(value?: HeaderWithSignature): void;

    hasShortHeader(): boolean;
    clearShortHeader(): void;
    getShortHeader(): object_types_pb.ShortHeader | undefined;
    setShortHeader(value?: object_types_pb.ShortHeader): void;

    hasSplitInfo(): boolean;
    clearSplitInfo(): void;
    getSplitInfo(): object_types_pb.SplitInfo | undefined;
    setSplitInfo(value?: object_types_pb.SplitInfo): void;

    getHeadCase(): Body.HeadCase;
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
      header?: HeaderWithSignature.AsObject,
      shortHeader?: object_types_pb.ShortHeader.AsObject,
      splitInfo?: object_types_pb.SplitInfo.AsObject,
    }

    export enum HeadCase {
      HEAD_NOT_SET = 0,
      HEADER = 1,
      SHORT_HEADER = 2,
      SPLIT_INFO = 3,
    }
  }
}

export class SearchRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): SearchRequest.Body | undefined;
  setBody(value?: SearchRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    body?: SearchRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasContainerId(): boolean;
    clearContainerId(): void;
    getContainerId(): refs_types_pb.ContainerID | undefined;
    setContainerId(value?: refs_types_pb.ContainerID): void;

    getVersion(): number;
    setVersion(value: number): void;

    clearFiltersList(): void;
    getFiltersList(): Array<SearchRequest.Body.Filter>;
    setFiltersList(value: Array<SearchRequest.Body.Filter>): void;
    addFilters(value?: SearchRequest.Body.Filter, index?: number): SearchRequest.Body.Filter;

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
      containerId?: refs_types_pb.ContainerID.AsObject,
      version: number,
      filtersList: Array<SearchRequest.Body.Filter.AsObject>,
    }

    export class Filter extends jspb.Message {
      getMatchType(): object_types_pb.MatchTypeMap[keyof object_types_pb.MatchTypeMap];
      setMatchType(value: object_types_pb.MatchTypeMap[keyof object_types_pb.MatchTypeMap]): void;

      getKey(): string;
      setKey(value: string): void;

      getValue(): string;
      setValue(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Filter.AsObject;
      static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Filter;
      static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
    }

    export namespace Filter {
      export type AsObject = {
        matchType: object_types_pb.MatchTypeMap[keyof object_types_pb.MatchTypeMap],
        key: string,
        value: string,
      }
    }
  }
}

export class SearchResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): SearchResponse.Body | undefined;
  setBody(value?: SearchResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    body?: SearchResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    clearIdListList(): void;
    getIdListList(): Array<refs_types_pb.ObjectID>;
    setIdListList(value: Array<refs_types_pb.ObjectID>): void;
    addIdList(value?: refs_types_pb.ObjectID, index?: number): refs_types_pb.ObjectID;

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
      idListList: Array<refs_types_pb.ObjectID.AsObject>,
    }
  }
}

export class Range extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    offset: number,
    length: number,
  }
}

export class GetRangeRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): GetRangeRequest.Body | undefined;
  setBody(value?: GetRangeRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRangeRequest): GetRangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRangeRequest;
  static deserializeBinaryFromReader(message: GetRangeRequest, reader: jspb.BinaryReader): GetRangeRequest;
}

export namespace GetRangeRequest {
  export type AsObject = {
    body?: GetRangeRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): refs_types_pb.Address | undefined;
    setAddress(value?: refs_types_pb.Address): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    getRaw(): boolean;
    setRaw(value: boolean): void;

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
      address?: refs_types_pb.Address.AsObject,
      range?: Range.AsObject,
      raw: boolean,
    }
  }
}

export class GetRangeResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): GetRangeResponse.Body | undefined;
  setBody(value?: GetRangeResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRangeResponse): GetRangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRangeResponse;
  static deserializeBinaryFromReader(message: GetRangeResponse, reader: jspb.BinaryReader): GetRangeResponse;
}

export namespace GetRangeResponse {
  export type AsObject = {
    body?: GetRangeResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): void;

    hasSplitInfo(): boolean;
    clearSplitInfo(): void;
    getSplitInfo(): object_types_pb.SplitInfo | undefined;
    setSplitInfo(value?: object_types_pb.SplitInfo): void;

    getRangePartCase(): Body.RangePartCase;
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
      chunk: Uint8Array | string,
      splitInfo?: object_types_pb.SplitInfo.AsObject,
    }

    export enum RangePartCase {
      RANGE_PART_NOT_SET = 0,
      CHUNK = 1,
      SPLIT_INFO = 2,
    }
  }
}

export class GetRangeHashRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): GetRangeHashRequest.Body | undefined;
  setBody(value?: GetRangeHashRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRangeHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRangeHashRequest): GetRangeHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRangeHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRangeHashRequest;
  static deserializeBinaryFromReader(message: GetRangeHashRequest, reader: jspb.BinaryReader): GetRangeHashRequest;
}

export namespace GetRangeHashRequest {
  export type AsObject = {
    body?: GetRangeHashRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): refs_types_pb.Address | undefined;
    setAddress(value?: refs_types_pb.Address): void;

    clearRangesList(): void;
    getRangesList(): Array<Range>;
    setRangesList(value: Array<Range>): void;
    addRanges(value?: Range, index?: number): Range;

    getSalt(): Uint8Array | string;
    getSalt_asU8(): Uint8Array;
    getSalt_asB64(): string;
    setSalt(value: Uint8Array | string): void;

    getType(): refs_types_pb.ChecksumTypeMap[keyof refs_types_pb.ChecksumTypeMap];
    setType(value: refs_types_pb.ChecksumTypeMap[keyof refs_types_pb.ChecksumTypeMap]): void;

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
      address?: refs_types_pb.Address.AsObject,
      rangesList: Array<Range.AsObject>,
      salt: Uint8Array | string,
      type: refs_types_pb.ChecksumTypeMap[keyof refs_types_pb.ChecksumTypeMap],
    }
  }
}

export class GetRangeHashResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): GetRangeHashResponse.Body | undefined;
  setBody(value?: GetRangeHashResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRangeHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRangeHashResponse): GetRangeHashResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRangeHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRangeHashResponse;
  static deserializeBinaryFromReader(message: GetRangeHashResponse, reader: jspb.BinaryReader): GetRangeHashResponse;
}

export namespace GetRangeHashResponse {
  export type AsObject = {
    body?: GetRangeHashResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    getType(): refs_types_pb.ChecksumTypeMap[keyof refs_types_pb.ChecksumTypeMap];
    setType(value: refs_types_pb.ChecksumTypeMap[keyof refs_types_pb.ChecksumTypeMap]): void;

    clearHashListList(): void;
    getHashListList(): Array<Uint8Array | string>;
    getHashListList_asU8(): Array<Uint8Array>;
    getHashListList_asB64(): Array<string>;
    setHashListList(value: Array<Uint8Array | string>): void;
    addHashList(value: Uint8Array | string, index?: number): Uint8Array | string;

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
      type: refs_types_pb.ChecksumTypeMap[keyof refs_types_pb.ChecksumTypeMap],
      hashListList: Array<Uint8Array | string>,
    }
  }
}


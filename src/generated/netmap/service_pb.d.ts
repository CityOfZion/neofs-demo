// package: neo.fs.v2.netmap
// file: netmap/service.proto

import * as jspb from "google-protobuf";
import * as netmap_types_pb from "../netmap/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

export class LocalNodeInfoRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): LocalNodeInfoRequest.Body | undefined;
  setBody(value?: LocalNodeInfoRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalNodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocalNodeInfoRequest): LocalNodeInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalNodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalNodeInfoRequest;
  static deserializeBinaryFromReader(message: LocalNodeInfoRequest, reader: jspb.BinaryReader): LocalNodeInfoRequest;
}

export namespace LocalNodeInfoRequest {
  export type AsObject = {
    body?: LocalNodeInfoRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
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
    }
  }
}

export class LocalNodeInfoResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): LocalNodeInfoResponse.Body | undefined;
  setBody(value?: LocalNodeInfoResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalNodeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocalNodeInfoResponse): LocalNodeInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalNodeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalNodeInfoResponse;
  static deserializeBinaryFromReader(message: LocalNodeInfoResponse, reader: jspb.BinaryReader): LocalNodeInfoResponse;
}

export namespace LocalNodeInfoResponse {
  export type AsObject = {
    body?: LocalNodeInfoResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): refs_types_pb.Version | undefined;
    setVersion(value?: refs_types_pb.Version): void;

    hasNodeInfo(): boolean;
    clearNodeInfo(): void;
    getNodeInfo(): netmap_types_pb.NodeInfo | undefined;
    setNodeInfo(value?: netmap_types_pb.NodeInfo): void;

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
      version?: refs_types_pb.Version.AsObject,
      nodeInfo?: netmap_types_pb.NodeInfo.AsObject,
    }
  }
}

export class NetworkInfoRequest extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): NetworkInfoRequest.Body | undefined;
  setBody(value?: NetworkInfoRequest.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.RequestMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfoRequest): NetworkInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfoRequest;
  static deserializeBinaryFromReader(message: NetworkInfoRequest, reader: jspb.BinaryReader): NetworkInfoRequest;
}

export namespace NetworkInfoRequest {
  export type AsObject = {
    body?: NetworkInfoRequest.Body.AsObject,
    metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
    verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
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
    }
  }
}

export class NetworkInfoResponse extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): NetworkInfoResponse.Body | undefined;
  setBody(value?: NetworkInfoResponse.Body): void;

  hasMetaHeader(): boolean;
  clearMetaHeader(): void;
  getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
  setMetaHeader(value?: session_types_pb.ResponseMetaHeader): void;

  hasVerifyHeader(): boolean;
  clearVerifyHeader(): void;
  getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
  setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfoResponse): NetworkInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfoResponse;
  static deserializeBinaryFromReader(message: NetworkInfoResponse, reader: jspb.BinaryReader): NetworkInfoResponse;
}

export namespace NetworkInfoResponse {
  export type AsObject = {
    body?: NetworkInfoResponse.Body.AsObject,
    metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
    verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
  }

  export class Body extends jspb.Message {
    hasNetworkInfo(): boolean;
    clearNetworkInfo(): void;
    getNetworkInfo(): netmap_types_pb.NetworkInfo | undefined;
    setNetworkInfo(value?: netmap_types_pb.NetworkInfo): void;

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
      networkInfo?: netmap_types_pb.NetworkInfo.AsObject,
    }
  }
}


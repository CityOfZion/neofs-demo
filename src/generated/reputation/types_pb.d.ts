// package: neo.fs.v2.reputation
// file: reputation/types.proto

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";

export class PeerID extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerID.AsObject;
  static toObject(includeInstance: boolean, msg: PeerID): PeerID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerID;
  static deserializeBinaryFromReader(message: PeerID, reader: jspb.BinaryReader): PeerID;
}

export namespace PeerID {
  export type AsObject = {
    publicKey: Uint8Array | string,
  }
}

export class Trust extends jspb.Message {
  hasPeer(): boolean;
  clearPeer(): void;
  getPeer(): PeerID | undefined;
  setPeer(value?: PeerID): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trust.AsObject;
  static toObject(includeInstance: boolean, msg: Trust): Trust.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trust, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trust;
  static deserializeBinaryFromReader(message: Trust, reader: jspb.BinaryReader): Trust;
}

export namespace Trust {
  export type AsObject = {
    peer?: PeerID.AsObject,
    value: number,
  }
}

export class PeerToPeerTrust extends jspb.Message {
  hasTrustingPeer(): boolean;
  clearTrustingPeer(): void;
  getTrustingPeer(): PeerID | undefined;
  setTrustingPeer(value?: PeerID): void;

  hasTrust(): boolean;
  clearTrust(): void;
  getTrust(): Trust | undefined;
  setTrust(value?: Trust): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerToPeerTrust.AsObject;
  static toObject(includeInstance: boolean, msg: PeerToPeerTrust): PeerToPeerTrust.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerToPeerTrust, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerToPeerTrust;
  static deserializeBinaryFromReader(message: PeerToPeerTrust, reader: jspb.BinaryReader): PeerToPeerTrust;
}

export namespace PeerToPeerTrust {
  export type AsObject = {
    trustingPeer?: PeerID.AsObject,
    trust?: Trust.AsObject,
  }
}

export class GlobalTrust extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): refs_types_pb.Version | undefined;
  setVersion(value?: refs_types_pb.Version): void;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): GlobalTrust.Body | undefined;
  setBody(value?: GlobalTrust.Body): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): refs_types_pb.Signature | undefined;
  setSignature(value?: refs_types_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalTrust.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalTrust): GlobalTrust.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalTrust, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalTrust;
  static deserializeBinaryFromReader(message: GlobalTrust, reader: jspb.BinaryReader): GlobalTrust;
}

export namespace GlobalTrust {
  export type AsObject = {
    version?: refs_types_pb.Version.AsObject,
    body?: GlobalTrust.Body.AsObject,
    signature?: refs_types_pb.Signature.AsObject,
  }

  export class Body extends jspb.Message {
    hasManager(): boolean;
    clearManager(): void;
    getManager(): PeerID | undefined;
    setManager(value?: PeerID): void;

    hasTrust(): boolean;
    clearTrust(): void;
    getTrust(): Trust | undefined;
    setTrust(value?: Trust): void;

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
      manager?: PeerID.AsObject,
      trust?: Trust.AsObject,
    }
  }
}


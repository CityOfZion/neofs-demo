// package: neo.fs.v2.object
// file: object/types.proto

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

export class ShortHeader extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): refs_types_pb.Version | undefined;
  setVersion(value?: refs_types_pb.Version): void;

  getCreationEpoch(): number;
  setCreationEpoch(value: number): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): refs_types_pb.OwnerID | undefined;
  setOwnerId(value?: refs_types_pb.OwnerID): void;

  getObjectType(): ObjectTypeMap[keyof ObjectTypeMap];
  setObjectType(value: ObjectTypeMap[keyof ObjectTypeMap]): void;

  getPayloadLength(): number;
  setPayloadLength(value: number): void;

  hasPayloadHash(): boolean;
  clearPayloadHash(): void;
  getPayloadHash(): refs_types_pb.Checksum | undefined;
  setPayloadHash(value?: refs_types_pb.Checksum): void;

  hasHomomorphicHash(): boolean;
  clearHomomorphicHash(): void;
  getHomomorphicHash(): refs_types_pb.Checksum | undefined;
  setHomomorphicHash(value?: refs_types_pb.Checksum): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShortHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ShortHeader): ShortHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShortHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShortHeader;
  static deserializeBinaryFromReader(message: ShortHeader, reader: jspb.BinaryReader): ShortHeader;
}

export namespace ShortHeader {
  export type AsObject = {
    version?: refs_types_pb.Version.AsObject,
    creationEpoch: number,
    ownerId?: refs_types_pb.OwnerID.AsObject,
    objectType: ObjectTypeMap[keyof ObjectTypeMap],
    payloadLength: number,
    payloadHash?: refs_types_pb.Checksum.AsObject,
    homomorphicHash?: refs_types_pb.Checksum.AsObject,
  }
}

export class Header extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): refs_types_pb.Version | undefined;
  setVersion(value?: refs_types_pb.Version): void;

  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): refs_types_pb.ContainerID | undefined;
  setContainerId(value?: refs_types_pb.ContainerID): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): refs_types_pb.OwnerID | undefined;
  setOwnerId(value?: refs_types_pb.OwnerID): void;

  getCreationEpoch(): number;
  setCreationEpoch(value: number): void;

  getPayloadLength(): number;
  setPayloadLength(value: number): void;

  hasPayloadHash(): boolean;
  clearPayloadHash(): void;
  getPayloadHash(): refs_types_pb.Checksum | undefined;
  setPayloadHash(value?: refs_types_pb.Checksum): void;

  getObjectType(): ObjectTypeMap[keyof ObjectTypeMap];
  setObjectType(value: ObjectTypeMap[keyof ObjectTypeMap]): void;

  hasHomomorphicHash(): boolean;
  clearHomomorphicHash(): void;
  getHomomorphicHash(): refs_types_pb.Checksum | undefined;
  setHomomorphicHash(value?: refs_types_pb.Checksum): void;

  hasSessionToken(): boolean;
  clearSessionToken(): void;
  getSessionToken(): session_types_pb.SessionToken | undefined;
  setSessionToken(value?: session_types_pb.SessionToken): void;

  clearAttributesList(): void;
  getAttributesList(): Array<Header.Attribute>;
  setAttributesList(value: Array<Header.Attribute>): void;
  addAttributes(value?: Header.Attribute, index?: number): Header.Attribute;

  hasSplit(): boolean;
  clearSplit(): void;
  getSplit(): Header.Split | undefined;
  setSplit(value?: Header.Split): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    version?: refs_types_pb.Version.AsObject,
    containerId?: refs_types_pb.ContainerID.AsObject,
    ownerId?: refs_types_pb.OwnerID.AsObject,
    creationEpoch: number,
    payloadLength: number,
    payloadHash?: refs_types_pb.Checksum.AsObject,
    objectType: ObjectTypeMap[keyof ObjectTypeMap],
    homomorphicHash?: refs_types_pb.Checksum.AsObject,
    sessionToken?: session_types_pb.SessionToken.AsObject,
    attributesList: Array<Header.Attribute.AsObject>,
    split?: Header.Split.AsObject,
  }

  export class Attribute extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attribute.AsObject;
    static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attribute;
    static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
  }

  export namespace Attribute {
    export type AsObject = {
      key: string,
      value: string,
    }
  }

  export class Split extends jspb.Message {
    hasParent(): boolean;
    clearParent(): void;
    getParent(): refs_types_pb.ObjectID | undefined;
    setParent(value?: refs_types_pb.ObjectID): void;

    hasPrevious(): boolean;
    clearPrevious(): void;
    getPrevious(): refs_types_pb.ObjectID | undefined;
    setPrevious(value?: refs_types_pb.ObjectID): void;

    hasParentSignature(): boolean;
    clearParentSignature(): void;
    getParentSignature(): refs_types_pb.Signature | undefined;
    setParentSignature(value?: refs_types_pb.Signature): void;

    hasParentHeader(): boolean;
    clearParentHeader(): void;
    getParentHeader(): Header | undefined;
    setParentHeader(value?: Header): void;

    clearChildrenList(): void;
    getChildrenList(): Array<refs_types_pb.ObjectID>;
    setChildrenList(value: Array<refs_types_pb.ObjectID>): void;
    addChildren(value?: refs_types_pb.ObjectID, index?: number): refs_types_pb.ObjectID;

    getSplitId(): Uint8Array | string;
    getSplitId_asU8(): Uint8Array;
    getSplitId_asB64(): string;
    setSplitId(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Split.AsObject;
    static toObject(includeInstance: boolean, msg: Split): Split.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Split, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Split;
    static deserializeBinaryFromReader(message: Split, reader: jspb.BinaryReader): Split;
  }

  export namespace Split {
    export type AsObject = {
      parent?: refs_types_pb.ObjectID.AsObject,
      previous?: refs_types_pb.ObjectID.AsObject,
      parentSignature?: refs_types_pb.Signature.AsObject,
      parentHeader?: Header.AsObject,
      childrenList: Array<refs_types_pb.ObjectID.AsObject>,
      splitId: Uint8Array | string,
    }
  }
}

export class Object extends jspb.Message {
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
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object.AsObject;
  static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Object;
  static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
}

export namespace Object {
  export type AsObject = {
    objectId?: refs_types_pb.ObjectID.AsObject,
    signature?: refs_types_pb.Signature.AsObject,
    header?: Header.AsObject,
    payload: Uint8Array | string,
  }
}

export class SplitInfo extends jspb.Message {
  getSplitId(): Uint8Array | string;
  getSplitId_asU8(): Uint8Array;
  getSplitId_asB64(): string;
  setSplitId(value: Uint8Array | string): void;

  hasLastPart(): boolean;
  clearLastPart(): void;
  getLastPart(): refs_types_pb.ObjectID | undefined;
  setLastPart(value?: refs_types_pb.ObjectID): void;

  hasLink(): boolean;
  clearLink(): void;
  getLink(): refs_types_pb.ObjectID | undefined;
  setLink(value?: refs_types_pb.ObjectID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SplitInfo): SplitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitInfo;
  static deserializeBinaryFromReader(message: SplitInfo, reader: jspb.BinaryReader): SplitInfo;
}

export namespace SplitInfo {
  export type AsObject = {
    splitId: Uint8Array | string,
    lastPart?: refs_types_pb.ObjectID.AsObject,
    link?: refs_types_pb.ObjectID.AsObject,
  }
}

export interface ObjectTypeMap {
  REGULAR: 0;
  TOMBSTONE: 1;
  STORAGE_GROUP: 2;
}

export const ObjectType: ObjectTypeMap;

export interface MatchTypeMap {
  MATCH_TYPE_UNSPECIFIED: 0;
  STRING_EQUAL: 1;
  STRING_NOT_EQUAL: 2;
  NOT_PRESENT: 3;
}

export const MatchType: MatchTypeMap;


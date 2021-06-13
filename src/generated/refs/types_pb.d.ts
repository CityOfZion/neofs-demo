// package: neo.fs.v2.refs
// file: refs/types.proto

import * as jspb from "google-protobuf";

export class Address extends jspb.Message {
  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): ContainerID | undefined;
  setContainerId(value?: ContainerID): void;

  hasObjectId(): boolean;
  clearObjectId(): void;
  getObjectId(): ObjectID | undefined;
  setObjectId(value?: ObjectID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    containerId?: ContainerID.AsObject,
    objectId?: ObjectID.AsObject,
  }
}

export class ObjectID extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectID.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectID): ObjectID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectID;
  static deserializeBinaryFromReader(message: ObjectID, reader: jspb.BinaryReader): ObjectID;
}

export namespace ObjectID {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class ContainerID extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerID.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerID): ContainerID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerID;
  static deserializeBinaryFromReader(message: ContainerID, reader: jspb.BinaryReader): ContainerID;
}

export namespace ContainerID {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class OwnerID extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OwnerID.AsObject;
  static toObject(includeInstance: boolean, msg: OwnerID): OwnerID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OwnerID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OwnerID;
  static deserializeBinaryFromReader(message: OwnerID, reader: jspb.BinaryReader): OwnerID;
}

export namespace OwnerID {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Version extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    major: number,
    minor: number,
  }
}

export class Signature extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getSign(): Uint8Array | string;
  getSign_asU8(): Uint8Array;
  getSign_asB64(): string;
  setSign(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    key: Uint8Array | string,
    sign: Uint8Array | string,
  }
}

export class Checksum extends jspb.Message {
  getType(): ChecksumTypeMap[keyof ChecksumTypeMap];
  setType(value: ChecksumTypeMap[keyof ChecksumTypeMap]): void;

  getSum(): Uint8Array | string;
  getSum_asU8(): Uint8Array;
  getSum_asB64(): string;
  setSum(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Checksum.AsObject;
  static toObject(includeInstance: boolean, msg: Checksum): Checksum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Checksum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Checksum;
  static deserializeBinaryFromReader(message: Checksum, reader: jspb.BinaryReader): Checksum;
}

export namespace Checksum {
  export type AsObject = {
    type: ChecksumTypeMap[keyof ChecksumTypeMap],
    sum: Uint8Array | string,
  }
}

export interface ChecksumTypeMap {
  CHECKSUM_TYPE_UNSPECIFIED: 0;
  TZ: 1;
  SHA256: 2;
}

export const ChecksumType: ChecksumTypeMap;


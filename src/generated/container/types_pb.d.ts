// package: neo.fs.v2.container
// file: container/types.proto

import * as jspb from "google-protobuf";
import * as netmap_types_pb from "../netmap/types_pb";
import * as refs_types_pb from "../refs/types_pb";

export class Container extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): refs_types_pb.Version | undefined;
  setVersion(value?: refs_types_pb.Version): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): refs_types_pb.OwnerID | undefined;
  setOwnerId(value?: refs_types_pb.OwnerID): void;

  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): void;

  getBasicAcl(): number;
  setBasicAcl(value: number): void;

  clearAttributesList(): void;
  getAttributesList(): Array<Container.Attribute>;
  setAttributesList(value: Array<Container.Attribute>): void;
  addAttributes(value?: Container.Attribute, index?: number): Container.Attribute;

  hasPlacementPolicy(): boolean;
  clearPlacementPolicy(): void;
  getPlacementPolicy(): netmap_types_pb.PlacementPolicy | undefined;
  setPlacementPolicy(value?: netmap_types_pb.PlacementPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Container.AsObject;
  static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Container;
  static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
}

export namespace Container {
  export type AsObject = {
    version?: refs_types_pb.Version.AsObject,
    ownerId?: refs_types_pb.OwnerID.AsObject,
    nonce: Uint8Array | string,
    basicAcl: number,
    attributesList: Array<Container.Attribute.AsObject>,
    placementPolicy?: netmap_types_pb.PlacementPolicy.AsObject,
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
}


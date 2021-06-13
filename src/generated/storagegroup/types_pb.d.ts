// package: neo.fs.v2.storagegroup
// file: storagegroup/types.proto

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";

export class StorageGroup extends jspb.Message {
  getValidationDataSize(): number;
  setValidationDataSize(value: number): void;

  hasValidationHash(): boolean;
  clearValidationHash(): void;
  getValidationHash(): refs_types_pb.Checksum | undefined;
  setValidationHash(value?: refs_types_pb.Checksum): void;

  getExpirationEpoch(): number;
  setExpirationEpoch(value: number): void;

  clearMembersList(): void;
  getMembersList(): Array<refs_types_pb.ObjectID>;
  setMembersList(value: Array<refs_types_pb.ObjectID>): void;
  addMembers(value?: refs_types_pb.ObjectID, index?: number): refs_types_pb.ObjectID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageGroup.AsObject;
  static toObject(includeInstance: boolean, msg: StorageGroup): StorageGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageGroup;
  static deserializeBinaryFromReader(message: StorageGroup, reader: jspb.BinaryReader): StorageGroup;
}

export namespace StorageGroup {
  export type AsObject = {
    validationDataSize: number,
    validationHash?: refs_types_pb.Checksum.AsObject,
    expirationEpoch: number,
    membersList: Array<refs_types_pb.ObjectID.AsObject>,
  }
}


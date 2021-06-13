// package: neo.fs.v2.tombstone
// file: tombstone/types.proto

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";

export class Tombstone extends jspb.Message {
  getExpirationEpoch(): number;
  setExpirationEpoch(value: number): void;

  getSplitId(): Uint8Array | string;
  getSplitId_asU8(): Uint8Array;
  getSplitId_asB64(): string;
  setSplitId(value: Uint8Array | string): void;

  clearMembersList(): void;
  getMembersList(): Array<refs_types_pb.ObjectID>;
  setMembersList(value: Array<refs_types_pb.ObjectID>): void;
  addMembers(value?: refs_types_pb.ObjectID, index?: number): refs_types_pb.ObjectID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tombstone.AsObject;
  static toObject(includeInstance: boolean, msg: Tombstone): Tombstone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tombstone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tombstone;
  static deserializeBinaryFromReader(message: Tombstone, reader: jspb.BinaryReader): Tombstone;
}

export namespace Tombstone {
  export type AsObject = {
    expirationEpoch: number,
    splitId: Uint8Array | string,
    membersList: Array<refs_types_pb.ObjectID.AsObject>,
  }
}


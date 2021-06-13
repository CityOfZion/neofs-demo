// package: neo.fs.v2.netmap
// file: netmap/types.proto

import * as jspb from "google-protobuf";

export class Filter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getOp(): OperationMap[keyof OperationMap];
  setOp(value: OperationMap[keyof OperationMap]): void;

  getValue(): string;
  setValue(value: string): void;

  clearFiltersList(): void;
  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  addFilters(value?: Filter, index?: number): Filter;

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
    name: string,
    key: string,
    op: OperationMap[keyof OperationMap],
    value: string,
    filtersList: Array<Filter.AsObject>,
  }
}

export class Selector extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getClause(): ClauseMap[keyof ClauseMap];
  setClause(value: ClauseMap[keyof ClauseMap]): void;

  getAttribute(): string;
  setAttribute(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Selector.AsObject;
  static toObject(includeInstance: boolean, msg: Selector): Selector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Selector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Selector;
  static deserializeBinaryFromReader(message: Selector, reader: jspb.BinaryReader): Selector;
}

export namespace Selector {
  export type AsObject = {
    name: string,
    count: number,
    clause: ClauseMap[keyof ClauseMap],
    attribute: string,
    filter: string,
  }
}

export class Replica extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getSelector(): string;
  setSelector(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Replica.AsObject;
  static toObject(includeInstance: boolean, msg: Replica): Replica.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Replica, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Replica;
  static deserializeBinaryFromReader(message: Replica, reader: jspb.BinaryReader): Replica;
}

export namespace Replica {
  export type AsObject = {
    count: number,
    selector: string,
  }
}

export class PlacementPolicy extends jspb.Message {
  clearReplicasList(): void;
  getReplicasList(): Array<Replica>;
  setReplicasList(value: Array<Replica>): void;
  addReplicas(value?: Replica, index?: number): Replica;

  getContainerBackupFactor(): number;
  setContainerBackupFactor(value: number): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<Selector>;
  setSelectorsList(value: Array<Selector>): void;
  addSelectors(value?: Selector, index?: number): Selector;

  clearFiltersList(): void;
  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  addFilters(value?: Filter, index?: number): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlacementPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: PlacementPolicy): PlacementPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlacementPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlacementPolicy;
  static deserializeBinaryFromReader(message: PlacementPolicy, reader: jspb.BinaryReader): PlacementPolicy;
}

export namespace PlacementPolicy {
  export type AsObject = {
    replicasList: Array<Replica.AsObject>,
    containerBackupFactor: number,
    selectorsList: Array<Selector.AsObject>,
    filtersList: Array<Filter.AsObject>,
  }
}

export class NodeInfo extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getAddress(): string;
  setAddress(value: string): void;

  clearAttributesList(): void;
  getAttributesList(): Array<NodeInfo.Attribute>;
  setAttributesList(value: Array<NodeInfo.Attribute>): void;
  addAttributes(value?: NodeInfo.Attribute, index?: number): NodeInfo.Attribute;

  getState(): NodeInfo.StateMap[keyof NodeInfo.StateMap];
  setState(value: NodeInfo.StateMap[keyof NodeInfo.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfo;
  static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
  export type AsObject = {
    publicKey: Uint8Array | string,
    address: string,
    attributesList: Array<NodeInfo.Attribute.AsObject>,
    state: NodeInfo.StateMap[keyof NodeInfo.StateMap],
  }

  export class Attribute extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    clearParentsList(): void;
    getParentsList(): Array<string>;
    setParentsList(value: Array<string>): void;
    addParents(value: string, index?: number): string;

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
      parentsList: Array<string>,
    }
  }

  export interface StateMap {
    UNSPECIFIED: 0;
    ONLINE: 1;
    OFFLINE: 2;
  }

  export const State: StateMap;
}

export class NetworkInfo extends jspb.Message {
  getCurrentEpoch(): number;
  setCurrentEpoch(value: number): void;

  getMagicNumber(): number;
  setMagicNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfo): NetworkInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfo;
  static deserializeBinaryFromReader(message: NetworkInfo, reader: jspb.BinaryReader): NetworkInfo;
}

export namespace NetworkInfo {
  export type AsObject = {
    currentEpoch: number,
    magicNumber: number,
  }
}

export interface OperationMap {
  OPERATION_UNSPECIFIED: 0;
  EQ: 1;
  NE: 2;
  GT: 3;
  GE: 4;
  LT: 5;
  LE: 6;
  OR: 7;
  AND: 8;
}

export const Operation: OperationMap;

export interface ClauseMap {
  CLAUSE_UNSPECIFIED: 0;
  SAME: 1;
  DISTINCT: 2;
}

export const Clause: ClauseMap;


// package: neo.fs.v2.acl
// file: acl/types.proto

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";

export class EACLRecord extends jspb.Message {
  getOperation(): OperationMap[keyof OperationMap];
  setOperation(value: OperationMap[keyof OperationMap]): void;

  getAction(): ActionMap[keyof ActionMap];
  setAction(value: ActionMap[keyof ActionMap]): void;

  clearFiltersList(): void;
  getFiltersList(): Array<EACLRecord.Filter>;
  setFiltersList(value: Array<EACLRecord.Filter>): void;
  addFilters(value?: EACLRecord.Filter, index?: number): EACLRecord.Filter;

  clearTargetsList(): void;
  getTargetsList(): Array<EACLRecord.Target>;
  setTargetsList(value: Array<EACLRecord.Target>): void;
  addTargets(value?: EACLRecord.Target, index?: number): EACLRecord.Target;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EACLRecord.AsObject;
  static toObject(includeInstance: boolean, msg: EACLRecord): EACLRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EACLRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EACLRecord;
  static deserializeBinaryFromReader(message: EACLRecord, reader: jspb.BinaryReader): EACLRecord;
}

export namespace EACLRecord {
  export type AsObject = {
    operation: OperationMap[keyof OperationMap],
    action: ActionMap[keyof ActionMap],
    filtersList: Array<EACLRecord.Filter.AsObject>,
    targetsList: Array<EACLRecord.Target.AsObject>,
  }

  export class Filter extends jspb.Message {
    getHeaderType(): HeaderTypeMap[keyof HeaderTypeMap];
    setHeaderType(value: HeaderTypeMap[keyof HeaderTypeMap]): void;

    getMatchType(): MatchTypeMap[keyof MatchTypeMap];
    setMatchType(value: MatchTypeMap[keyof MatchTypeMap]): void;

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
      headerType: HeaderTypeMap[keyof HeaderTypeMap],
      matchType: MatchTypeMap[keyof MatchTypeMap],
      key: string,
      value: string,
    }
  }

  export class Target extends jspb.Message {
    getRole(): RoleMap[keyof RoleMap];
    setRole(value: RoleMap[keyof RoleMap]): void;

    clearKeysList(): void;
    getKeysList(): Array<Uint8Array | string>;
    getKeysList_asU8(): Array<Uint8Array>;
    getKeysList_asB64(): Array<string>;
    setKeysList(value: Array<Uint8Array | string>): void;
    addKeys(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
  }

  export namespace Target {
    export type AsObject = {
      role: RoleMap[keyof RoleMap],
      keysList: Array<Uint8Array | string>,
    }
  }
}

export class EACLTable extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): refs_types_pb.Version | undefined;
  setVersion(value?: refs_types_pb.Version): void;

  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): refs_types_pb.ContainerID | undefined;
  setContainerId(value?: refs_types_pb.ContainerID): void;

  clearRecordsList(): void;
  getRecordsList(): Array<EACLRecord>;
  setRecordsList(value: Array<EACLRecord>): void;
  addRecords(value?: EACLRecord, index?: number): EACLRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EACLTable.AsObject;
  static toObject(includeInstance: boolean, msg: EACLTable): EACLTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EACLTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EACLTable;
  static deserializeBinaryFromReader(message: EACLTable, reader: jspb.BinaryReader): EACLTable;
}

export namespace EACLTable {
  export type AsObject = {
    version?: refs_types_pb.Version.AsObject,
    containerId?: refs_types_pb.ContainerID.AsObject,
    recordsList: Array<EACLRecord.AsObject>,
  }
}

export class BearerToken extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): BearerToken.Body | undefined;
  setBody(value?: BearerToken.Body): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): refs_types_pb.Signature | undefined;
  setSignature(value?: refs_types_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BearerToken.AsObject;
  static toObject(includeInstance: boolean, msg: BearerToken): BearerToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BearerToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BearerToken;
  static deserializeBinaryFromReader(message: BearerToken, reader: jspb.BinaryReader): BearerToken;
}

export namespace BearerToken {
  export type AsObject = {
    body?: BearerToken.Body.AsObject,
    signature?: refs_types_pb.Signature.AsObject,
  }

  export class Body extends jspb.Message {
    hasEaclTable(): boolean;
    clearEaclTable(): void;
    getEaclTable(): EACLTable | undefined;
    setEaclTable(value?: EACLTable): void;

    hasOwnerId(): boolean;
    clearOwnerId(): void;
    getOwnerId(): refs_types_pb.OwnerID | undefined;
    setOwnerId(value?: refs_types_pb.OwnerID): void;

    hasLifetime(): boolean;
    clearLifetime(): void;
    getLifetime(): BearerToken.Body.TokenLifetime | undefined;
    setLifetime(value?: BearerToken.Body.TokenLifetime): void;

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
      eaclTable?: EACLTable.AsObject,
      ownerId?: refs_types_pb.OwnerID.AsObject,
      lifetime?: BearerToken.Body.TokenLifetime.AsObject,
    }

    export class TokenLifetime extends jspb.Message {
      getExp(): number;
      setExp(value: number): void;

      getNbf(): number;
      setNbf(value: number): void;

      getIat(): number;
      setIat(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TokenLifetime.AsObject;
      static toObject(includeInstance: boolean, msg: TokenLifetime): TokenLifetime.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TokenLifetime, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TokenLifetime;
      static deserializeBinaryFromReader(message: TokenLifetime, reader: jspb.BinaryReader): TokenLifetime;
    }

    export namespace TokenLifetime {
      export type AsObject = {
        exp: number,
        nbf: number,
        iat: number,
      }
    }
  }
}

export interface RoleMap {
  ROLE_UNSPECIFIED: 0;
  USER: 1;
  SYSTEM: 2;
  OTHERS: 3;
}

export const Role: RoleMap;

export interface MatchTypeMap {
  MATCH_TYPE_UNSPECIFIED: 0;
  STRING_EQUAL: 1;
  STRING_NOT_EQUAL: 2;
}

export const MatchType: MatchTypeMap;

export interface OperationMap {
  OPERATION_UNSPECIFIED: 0;
  GET: 1;
  HEAD: 2;
  PUT: 3;
  DELETE: 4;
  SEARCH: 5;
  GETRANGE: 6;
  GETRANGEHASH: 7;
}

export const Operation: OperationMap;

export interface ActionMap {
  ACTION_UNSPECIFIED: 0;
  ALLOW: 1;
  DENY: 2;
}

export const Action: ActionMap;

export interface HeaderTypeMap {
  HEADER_UNSPECIFIED: 0;
  REQUEST: 1;
  OBJECT: 2;
}

export const HeaderType: HeaderTypeMap;


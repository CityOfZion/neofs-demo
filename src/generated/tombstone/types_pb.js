/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var refs_types_pb = require('../refs/types_pb.js');
goog.object.extend(proto, refs_types_pb);
goog.exportSymbol('proto.neo.fs.v2.tombstone.Tombstone', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neo.fs.v2.tombstone.Tombstone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.neo.fs.v2.tombstone.Tombstone.repeatedFields_, null);
};
goog.inherits(proto.neo.fs.v2.tombstone.Tombstone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.neo.fs.v2.tombstone.Tombstone.displayName = 'proto.neo.fs.v2.tombstone.Tombstone';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.neo.fs.v2.tombstone.Tombstone.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.toObject = function(opt_includeInstance) {
  return proto.neo.fs.v2.tombstone.Tombstone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neo.fs.v2.tombstone.Tombstone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.neo.fs.v2.tombstone.Tombstone.toObject = function(includeInstance, msg) {
  var f, obj = {
    expirationEpoch: jspb.Message.getFieldWithDefault(msg, 1, 0),
    splitId: msg.getSplitId_asB64(),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    refs_types_pb.ObjectID.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neo.fs.v2.tombstone.Tombstone}
 */
proto.neo.fs.v2.tombstone.Tombstone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neo.fs.v2.tombstone.Tombstone;
  return proto.neo.fs.v2.tombstone.Tombstone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neo.fs.v2.tombstone.Tombstone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neo.fs.v2.tombstone.Tombstone}
 */
proto.neo.fs.v2.tombstone.Tombstone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpirationEpoch(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSplitId(value);
      break;
    case 3:
      var value = new refs_types_pb.ObjectID;
      reader.readMessage(value,refs_types_pb.ObjectID.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.neo.fs.v2.tombstone.Tombstone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.neo.fs.v2.tombstone.Tombstone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.neo.fs.v2.tombstone.Tombstone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpirationEpoch();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSplitId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      refs_types_pb.ObjectID.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 expiration_epoch = 1;
 * @return {number}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.getExpirationEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.neo.fs.v2.tombstone.Tombstone.prototype.setExpirationEpoch = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes split_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.getSplitId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes split_id = 2;
 * This is a type-conversion wrapper around `getSplitId()`
 * @return {string}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.getSplitId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSplitId()));
};


/**
 * optional bytes split_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSplitId()`
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.getSplitId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSplitId()));
};


/** @param {!(string|Uint8Array)} value */
proto.neo.fs.v2.tombstone.Tombstone.prototype.setSplitId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated neo.fs.v2.refs.ObjectID members = 3;
 * @return {!Array<!proto.neo.fs.v2.refs.ObjectID>}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.neo.fs.v2.refs.ObjectID>} */ (
    jspb.Message.getRepeatedWrapperField(this, refs_types_pb.ObjectID, 3));
};


/** @param {!Array<!proto.neo.fs.v2.refs.ObjectID>} value */
proto.neo.fs.v2.tombstone.Tombstone.prototype.setMembersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.neo.fs.v2.refs.ObjectID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.neo.fs.v2.refs.ObjectID}
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.neo.fs.v2.refs.ObjectID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.neo.fs.v2.tombstone.Tombstone.prototype.clearMembersList = function() {
  this.setMembersList([]);
};


goog.object.extend(exports, proto.neo.fs.v2.tombstone);
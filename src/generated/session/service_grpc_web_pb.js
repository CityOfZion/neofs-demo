/**
 * @fileoverview gRPC-Web generated client stub for neo.fs.v2.session
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var refs_types_pb = require('../refs/types_pb.js')

var session_types_pb = require('../session/types_pb.js')
const proto = {};
proto.neo = {};
proto.neo.fs = {};
proto.neo.fs.v2 = {};
proto.neo.fs.v2.session = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neo.fs.v2.session.SessionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neo.fs.v2.session.SessionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.session.CreateRequest,
 *   !proto.neo.fs.v2.session.CreateResponse>}
 */
const methodDescriptor_SessionService_Create = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.session.SessionService/Create',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.session.CreateRequest,
  proto.neo.fs.v2.session.CreateResponse,
  /**
   * @param {!proto.neo.fs.v2.session.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.session.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.session.CreateRequest,
 *   !proto.neo.fs.v2.session.CreateResponse>}
 */
const methodInfo_SessionService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.session.CreateResponse,
  /**
   * @param {!proto.neo.fs.v2.session.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.session.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.session.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.session.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.session.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.session.SessionServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.session.SessionService/Create',
      request,
      metadata || {},
      methodDescriptor_SessionService_Create,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.session.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.session.CreateResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.session.SessionServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.session.SessionService/Create',
      request,
      metadata || {},
      methodDescriptor_SessionService_Create);
};


module.exports = proto.neo.fs.v2.session;


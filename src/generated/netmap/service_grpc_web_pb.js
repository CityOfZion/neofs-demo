/**
 * @fileoverview gRPC-Web generated client stub for neo.fs.v2.netmap
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var netmap_types_pb = require('../netmap/types_pb.js')

var refs_types_pb = require('../refs/types_pb.js')

var session_types_pb = require('../session/types_pb.js')
const proto = {};
proto.neo = {};
proto.neo.fs = {};
proto.neo.fs.v2 = {};
proto.neo.fs.v2.netmap = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neo.fs.v2.netmap.NetmapServiceClient =
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
proto.neo.fs.v2.netmap.NetmapServicePromiseClient =
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
 *   !proto.neo.fs.v2.netmap.LocalNodeInfoRequest,
 *   !proto.neo.fs.v2.netmap.LocalNodeInfoResponse>}
 */
const methodDescriptor_NetmapService_LocalNodeInfo = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.netmap.NetmapService/LocalNodeInfo',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.netmap.LocalNodeInfoRequest,
  proto.neo.fs.v2.netmap.LocalNodeInfoResponse,
  /**
   * @param {!proto.neo.fs.v2.netmap.LocalNodeInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.netmap.LocalNodeInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.netmap.LocalNodeInfoRequest,
 *   !proto.neo.fs.v2.netmap.LocalNodeInfoResponse>}
 */
const methodInfo_NetmapService_LocalNodeInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.netmap.LocalNodeInfoResponse,
  /**
   * @param {!proto.neo.fs.v2.netmap.LocalNodeInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.netmap.LocalNodeInfoResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.netmap.LocalNodeInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.netmap.LocalNodeInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.netmap.LocalNodeInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.netmap.NetmapServiceClient.prototype.localNodeInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.netmap.NetmapService/LocalNodeInfo',
      request,
      metadata || {},
      methodDescriptor_NetmapService_LocalNodeInfo,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.netmap.LocalNodeInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.netmap.LocalNodeInfoResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.netmap.NetmapServicePromiseClient.prototype.localNodeInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.netmap.NetmapService/LocalNodeInfo',
      request,
      metadata || {},
      methodDescriptor_NetmapService_LocalNodeInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.netmap.NetworkInfoRequest,
 *   !proto.neo.fs.v2.netmap.NetworkInfoResponse>}
 */
const methodDescriptor_NetmapService_NetworkInfo = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.netmap.NetmapService/NetworkInfo',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.netmap.NetworkInfoRequest,
  proto.neo.fs.v2.netmap.NetworkInfoResponse,
  /**
   * @param {!proto.neo.fs.v2.netmap.NetworkInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.netmap.NetworkInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.netmap.NetworkInfoRequest,
 *   !proto.neo.fs.v2.netmap.NetworkInfoResponse>}
 */
const methodInfo_NetmapService_NetworkInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.netmap.NetworkInfoResponse,
  /**
   * @param {!proto.neo.fs.v2.netmap.NetworkInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.netmap.NetworkInfoResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.netmap.NetworkInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.netmap.NetworkInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.netmap.NetworkInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.netmap.NetmapServiceClient.prototype.networkInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.netmap.NetmapService/NetworkInfo',
      request,
      metadata || {},
      methodDescriptor_NetmapService_NetworkInfo,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.netmap.NetworkInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.netmap.NetworkInfoResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.netmap.NetmapServicePromiseClient.prototype.networkInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.netmap.NetmapService/NetworkInfo',
      request,
      metadata || {},
      methodDescriptor_NetmapService_NetworkInfo);
};


module.exports = proto.neo.fs.v2.netmap;


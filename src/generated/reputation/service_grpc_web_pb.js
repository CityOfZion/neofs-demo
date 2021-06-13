/**
 * @fileoverview gRPC-Web generated client stub for neo.fs.v2.reputation
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var reputation_types_pb = require('../reputation/types_pb.js')

var session_types_pb = require('../session/types_pb.js')
const proto = {};
proto.neo = {};
proto.neo.fs = {};
proto.neo.fs.v2 = {};
proto.neo.fs.v2.reputation = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neo.fs.v2.reputation.ReputationServiceClient =
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
proto.neo.fs.v2.reputation.ReputationServicePromiseClient =
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
 *   !proto.neo.fs.v2.reputation.AnnounceLocalTrustRequest,
 *   !proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse>}
 */
const methodDescriptor_ReputationService_AnnounceLocalTrust = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.reputation.ReputationService/AnnounceLocalTrust',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.reputation.AnnounceLocalTrustRequest,
  proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse,
  /**
   * @param {!proto.neo.fs.v2.reputation.AnnounceLocalTrustRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.reputation.AnnounceLocalTrustRequest,
 *   !proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse>}
 */
const methodInfo_ReputationService_AnnounceLocalTrust = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse,
  /**
   * @param {!proto.neo.fs.v2.reputation.AnnounceLocalTrustRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.reputation.AnnounceLocalTrustRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.reputation.ReputationServiceClient.prototype.announceLocalTrust =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.reputation.ReputationService/AnnounceLocalTrust',
      request,
      metadata || {},
      methodDescriptor_ReputationService_AnnounceLocalTrust,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.reputation.AnnounceLocalTrustRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.reputation.AnnounceLocalTrustResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.reputation.ReputationServicePromiseClient.prototype.announceLocalTrust =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.reputation.ReputationService/AnnounceLocalTrust',
      request,
      metadata || {},
      methodDescriptor_ReputationService_AnnounceLocalTrust);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.reputation.AnnounceIntermediateResultRequest,
 *   !proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse>}
 */
const methodDescriptor_ReputationService_AnnounceIntermediateResult = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.reputation.ReputationService/AnnounceIntermediateResult',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.reputation.AnnounceIntermediateResultRequest,
  proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse,
  /**
   * @param {!proto.neo.fs.v2.reputation.AnnounceIntermediateResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.reputation.AnnounceIntermediateResultRequest,
 *   !proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse>}
 */
const methodInfo_ReputationService_AnnounceIntermediateResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse,
  /**
   * @param {!proto.neo.fs.v2.reputation.AnnounceIntermediateResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.reputation.AnnounceIntermediateResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.reputation.ReputationServiceClient.prototype.announceIntermediateResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.reputation.ReputationService/AnnounceIntermediateResult',
      request,
      metadata || {},
      methodDescriptor_ReputationService_AnnounceIntermediateResult,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.reputation.AnnounceIntermediateResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.reputation.AnnounceIntermediateResultResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.reputation.ReputationServicePromiseClient.prototype.announceIntermediateResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.reputation.ReputationService/AnnounceIntermediateResult',
      request,
      metadata || {},
      methodDescriptor_ReputationService_AnnounceIntermediateResult);
};


module.exports = proto.neo.fs.v2.reputation;


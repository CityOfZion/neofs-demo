/**
 * @fileoverview gRPC-Web generated client stub for neo.fs.v2.accounting
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var accounting_types_pb = require('../accounting/types_pb.js')

var refs_types_pb = require('../refs/types_pb.js')

var session_types_pb = require('../session/types_pb.js')
const proto = {};
proto.neo = {};
proto.neo.fs = {};
proto.neo.fs.v2 = {};
proto.neo.fs.v2.accounting = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neo.fs.v2.accounting.AccountingServiceClient =
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
proto.neo.fs.v2.accounting.AccountingServicePromiseClient =
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
 *   !proto.neo.fs.v2.accounting.BalanceRequest,
 *   !proto.neo.fs.v2.accounting.BalanceResponse>}
 */
const methodDescriptor_AccountingService_Balance = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.accounting.AccountingService/Balance',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.accounting.BalanceRequest,
  proto.neo.fs.v2.accounting.BalanceResponse,
  /**
   * @param {!proto.neo.fs.v2.accounting.BalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.accounting.BalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.accounting.BalanceRequest,
 *   !proto.neo.fs.v2.accounting.BalanceResponse>}
 */
const methodInfo_AccountingService_Balance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.accounting.BalanceResponse,
  /**
   * @param {!proto.neo.fs.v2.accounting.BalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.accounting.BalanceResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.accounting.BalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.accounting.BalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.accounting.BalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.accounting.AccountingServiceClient.prototype.balance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.accounting.AccountingService/Balance',
      request,
      metadata || {},
      methodDescriptor_AccountingService_Balance,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.accounting.BalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.accounting.BalanceResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.accounting.AccountingServicePromiseClient.prototype.balance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.accounting.AccountingService/Balance',
      request,
      metadata || {},
      methodDescriptor_AccountingService_Balance);
};


module.exports = proto.neo.fs.v2.accounting;


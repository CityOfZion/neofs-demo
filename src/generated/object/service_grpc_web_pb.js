/**
 * @fileoverview gRPC-Web generated client stub for neo.fs.v2.object
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var object_types_pb = require('../object/types_pb.js')

var refs_types_pb = require('../refs/types_pb.js')

var session_types_pb = require('../session/types_pb.js')
const proto = {};
proto.neo = {};
proto.neo.fs = {};
proto.neo.fs.v2 = {};
proto.neo.fs.v2.object = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neo.fs.v2.object.ObjectServiceClient =
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
proto.neo.fs.v2.object.ObjectServicePromiseClient =
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
 *   !proto.neo.fs.v2.object.GetRequest,
 *   !proto.neo.fs.v2.object.GetResponse>}
 */
const methodDescriptor_ObjectService_Get = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.object.ObjectService/Get',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.neo.fs.v2.object.GetRequest,
  proto.neo.fs.v2.object.GetResponse,
  /**
   * @param {!proto.neo.fs.v2.object.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.GetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.object.GetRequest,
 *   !proto.neo.fs.v2.object.GetResponse>}
 */
const methodInfo_ObjectService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.object.GetResponse,
  /**
   * @param {!proto.neo.fs.v2.object.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.GetResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.object.GetRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.GetResponse>}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServiceClient.prototype.get =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Get',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Get);
};


/**
 * @param {!proto.neo.fs.v2.object.GetRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.GetResponse>}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Get',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.object.DeleteRequest,
 *   !proto.neo.fs.v2.object.DeleteResponse>}
 */
const methodDescriptor_ObjectService_Delete = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.object.ObjectService/Delete',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.object.DeleteRequest,
  proto.neo.fs.v2.object.DeleteResponse,
  /**
   * @param {!proto.neo.fs.v2.object.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.object.DeleteRequest,
 *   !proto.neo.fs.v2.object.DeleteResponse>}
 */
const methodInfo_ObjectService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.object.DeleteResponse,
  /**
   * @param {!proto.neo.fs.v2.object.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.object.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.object.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Delete',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Delete,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.object.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.object.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.object.ObjectServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Delete',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.object.HeadRequest,
 *   !proto.neo.fs.v2.object.HeadResponse>}
 */
const methodDescriptor_ObjectService_Head = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.object.ObjectService/Head',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.object.HeadRequest,
  proto.neo.fs.v2.object.HeadResponse,
  /**
   * @param {!proto.neo.fs.v2.object.HeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.HeadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.object.HeadRequest,
 *   !proto.neo.fs.v2.object.HeadResponse>}
 */
const methodInfo_ObjectService_Head = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.object.HeadResponse,
  /**
   * @param {!proto.neo.fs.v2.object.HeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.HeadResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.object.HeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.object.HeadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.HeadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServiceClient.prototype.head =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Head',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Head,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.object.HeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.object.HeadResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.object.ObjectServicePromiseClient.prototype.head =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Head',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Head);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.object.SearchRequest,
 *   !proto.neo.fs.v2.object.SearchResponse>}
 */
const methodDescriptor_ObjectService_Search = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.object.ObjectService/Search',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.neo.fs.v2.object.SearchRequest,
  proto.neo.fs.v2.object.SearchResponse,
  /**
   * @param {!proto.neo.fs.v2.object.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.SearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.object.SearchRequest,
 *   !proto.neo.fs.v2.object.SearchResponse>}
 */
const methodInfo_ObjectService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.object.SearchResponse,
  /**
   * @param {!proto.neo.fs.v2.object.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.SearchResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.object.SearchRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.SearchResponse>}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServiceClient.prototype.search =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Search',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Search);
};


/**
 * @param {!proto.neo.fs.v2.object.SearchRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.SearchResponse>}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/Search',
      request,
      metadata || {},
      methodDescriptor_ObjectService_Search);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.object.GetRangeRequest,
 *   !proto.neo.fs.v2.object.GetRangeResponse>}
 */
const methodDescriptor_ObjectService_GetRange = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.object.ObjectService/GetRange',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.neo.fs.v2.object.GetRangeRequest,
  proto.neo.fs.v2.object.GetRangeResponse,
  /**
   * @param {!proto.neo.fs.v2.object.GetRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.GetRangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.object.GetRangeRequest,
 *   !proto.neo.fs.v2.object.GetRangeResponse>}
 */
const methodInfo_ObjectService_GetRange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.object.GetRangeResponse,
  /**
   * @param {!proto.neo.fs.v2.object.GetRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.GetRangeResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.object.GetRangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.GetRangeResponse>}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServiceClient.prototype.getRange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/GetRange',
      request,
      metadata || {},
      methodDescriptor_ObjectService_GetRange);
};


/**
 * @param {!proto.neo.fs.v2.object.GetRangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.GetRangeResponse>}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServicePromiseClient.prototype.getRange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/GetRange',
      request,
      metadata || {},
      methodDescriptor_ObjectService_GetRange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.object.GetRangeHashRequest,
 *   !proto.neo.fs.v2.object.GetRangeHashResponse>}
 */
const methodDescriptor_ObjectService_GetRangeHash = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.object.ObjectService/GetRangeHash',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.object.GetRangeHashRequest,
  proto.neo.fs.v2.object.GetRangeHashResponse,
  /**
   * @param {!proto.neo.fs.v2.object.GetRangeHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.GetRangeHashResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.object.GetRangeHashRequest,
 *   !proto.neo.fs.v2.object.GetRangeHashResponse>}
 */
const methodInfo_ObjectService_GetRangeHash = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.object.GetRangeHashResponse,
  /**
   * @param {!proto.neo.fs.v2.object.GetRangeHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.object.GetRangeHashResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.object.GetRangeHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.object.GetRangeHashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.object.GetRangeHashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.object.ObjectServiceClient.prototype.getRangeHash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/GetRangeHash',
      request,
      metadata || {},
      methodDescriptor_ObjectService_GetRangeHash,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.object.GetRangeHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.object.GetRangeHashResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.object.ObjectServicePromiseClient.prototype.getRangeHash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.object.ObjectService/GetRangeHash',
      request,
      metadata || {},
      methodDescriptor_ObjectService_GetRangeHash);
};


module.exports = proto.neo.fs.v2.object;


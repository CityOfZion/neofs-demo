/**
 * @fileoverview gRPC-Web generated client stub for neo.fs.v2.container
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var acl_types_pb = require('../acl/types_pb.js')

var container_types_pb = require('../container/types_pb.js')

var refs_types_pb = require('../refs/types_pb.js')

var session_types_pb = require('../session/types_pb.js')
const proto = {};
proto.neo = {};
proto.neo.fs = {};
proto.neo.fs.v2 = {};
proto.neo.fs.v2.container = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neo.fs.v2.container.ContainerServiceClient =
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
proto.neo.fs.v2.container.ContainerServicePromiseClient =
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
 *   !proto.neo.fs.v2.container.PutRequest,
 *   !proto.neo.fs.v2.container.PutResponse>}
 */
const methodDescriptor_ContainerService_Put = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.container.ContainerService/Put',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.container.PutRequest,
  proto.neo.fs.v2.container.PutResponse,
  /**
   * @param {!proto.neo.fs.v2.container.PutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.PutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.container.PutRequest,
 *   !proto.neo.fs.v2.container.PutResponse>}
 */
const methodInfo_ContainerService_Put = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.container.PutResponse,
  /**
   * @param {!proto.neo.fs.v2.container.PutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.PutResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.container.PutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.container.PutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.container.PutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.container.ContainerServiceClient.prototype.put =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/Put',
      request,
      metadata || {},
      methodDescriptor_ContainerService_Put,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.container.PutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.container.PutResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.container.ContainerServicePromiseClient.prototype.put =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/Put',
      request,
      metadata || {},
      methodDescriptor_ContainerService_Put);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.container.DeleteRequest,
 *   !proto.neo.fs.v2.container.DeleteResponse>}
 */
const methodDescriptor_ContainerService_Delete = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.container.ContainerService/Delete',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.container.DeleteRequest,
  proto.neo.fs.v2.container.DeleteResponse,
  /**
   * @param {!proto.neo.fs.v2.container.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.container.DeleteRequest,
 *   !proto.neo.fs.v2.container.DeleteResponse>}
 */
const methodInfo_ContainerService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.container.DeleteResponse,
  /**
   * @param {!proto.neo.fs.v2.container.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.container.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.container.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.container.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.container.ContainerServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/Delete',
      request,
      metadata || {},
      methodDescriptor_ContainerService_Delete,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.container.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.container.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.container.ContainerServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/Delete',
      request,
      metadata || {},
      methodDescriptor_ContainerService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.container.GetRequest,
 *   !proto.neo.fs.v2.container.GetResponse>}
 */
const methodDescriptor_ContainerService_Get = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.container.ContainerService/Get',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.container.GetRequest,
  proto.neo.fs.v2.container.GetResponse,
  /**
   * @param {!proto.neo.fs.v2.container.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.GetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.container.GetRequest,
 *   !proto.neo.fs.v2.container.GetResponse>}
 */
const methodInfo_ContainerService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.container.GetResponse,
  /**
   * @param {!proto.neo.fs.v2.container.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.GetResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.container.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.container.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.container.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.container.ContainerServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/Get',
      request,
      metadata || {},
      methodDescriptor_ContainerService_Get,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.container.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.container.GetResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.container.ContainerServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/Get',
      request,
      metadata || {},
      methodDescriptor_ContainerService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.container.ListRequest,
 *   !proto.neo.fs.v2.container.ListResponse>}
 */
const methodDescriptor_ContainerService_List = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.container.ContainerService/List',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.container.ListRequest,
  proto.neo.fs.v2.container.ListResponse,
  /**
   * @param {!proto.neo.fs.v2.container.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.ListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.container.ListRequest,
 *   !proto.neo.fs.v2.container.ListResponse>}
 */
const methodInfo_ContainerService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.container.ListResponse,
  /**
   * @param {!proto.neo.fs.v2.container.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.ListResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.container.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.container.ListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.container.ListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.container.ContainerServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/List',
      request,
      metadata || {},
      methodDescriptor_ContainerService_List,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.container.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.container.ListResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.container.ContainerServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/List',
      request,
      metadata || {},
      methodDescriptor_ContainerService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.container.SetExtendedACLRequest,
 *   !proto.neo.fs.v2.container.SetExtendedACLResponse>}
 */
const methodDescriptor_ContainerService_SetExtendedACL = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.container.ContainerService/SetExtendedACL',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.container.SetExtendedACLRequest,
  proto.neo.fs.v2.container.SetExtendedACLResponse,
  /**
   * @param {!proto.neo.fs.v2.container.SetExtendedACLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.SetExtendedACLResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.container.SetExtendedACLRequest,
 *   !proto.neo.fs.v2.container.SetExtendedACLResponse>}
 */
const methodInfo_ContainerService_SetExtendedACL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.container.SetExtendedACLResponse,
  /**
   * @param {!proto.neo.fs.v2.container.SetExtendedACLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.SetExtendedACLResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.container.SetExtendedACLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.container.SetExtendedACLResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.container.SetExtendedACLResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.container.ContainerServiceClient.prototype.setExtendedACL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/SetExtendedACL',
      request,
      metadata || {},
      methodDescriptor_ContainerService_SetExtendedACL,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.container.SetExtendedACLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.container.SetExtendedACLResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.container.ContainerServicePromiseClient.prototype.setExtendedACL =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/SetExtendedACL',
      request,
      metadata || {},
      methodDescriptor_ContainerService_SetExtendedACL);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.container.GetExtendedACLRequest,
 *   !proto.neo.fs.v2.container.GetExtendedACLResponse>}
 */
const methodDescriptor_ContainerService_GetExtendedACL = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.container.ContainerService/GetExtendedACL',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.container.GetExtendedACLRequest,
  proto.neo.fs.v2.container.GetExtendedACLResponse,
  /**
   * @param {!proto.neo.fs.v2.container.GetExtendedACLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.GetExtendedACLResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.container.GetExtendedACLRequest,
 *   !proto.neo.fs.v2.container.GetExtendedACLResponse>}
 */
const methodInfo_ContainerService_GetExtendedACL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.container.GetExtendedACLResponse,
  /**
   * @param {!proto.neo.fs.v2.container.GetExtendedACLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.GetExtendedACLResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.container.GetExtendedACLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.container.GetExtendedACLResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.container.GetExtendedACLResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.container.ContainerServiceClient.prototype.getExtendedACL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/GetExtendedACL',
      request,
      metadata || {},
      methodDescriptor_ContainerService_GetExtendedACL,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.container.GetExtendedACLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.container.GetExtendedACLResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.container.ContainerServicePromiseClient.prototype.getExtendedACL =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/GetExtendedACL',
      request,
      metadata || {},
      methodDescriptor_ContainerService_GetExtendedACL);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.neo.fs.v2.container.AnnounceUsedSpaceRequest,
 *   !proto.neo.fs.v2.container.AnnounceUsedSpaceResponse>}
 */
const methodDescriptor_ContainerService_AnnounceUsedSpace = new grpc.web.MethodDescriptor(
  '/neo.fs.v2.container.ContainerService/AnnounceUsedSpace',
  grpc.web.MethodType.UNARY,
  proto.neo.fs.v2.container.AnnounceUsedSpaceRequest,
  proto.neo.fs.v2.container.AnnounceUsedSpaceResponse,
  /**
   * @param {!proto.neo.fs.v2.container.AnnounceUsedSpaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.AnnounceUsedSpaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neo.fs.v2.container.AnnounceUsedSpaceRequest,
 *   !proto.neo.fs.v2.container.AnnounceUsedSpaceResponse>}
 */
const methodInfo_ContainerService_AnnounceUsedSpace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neo.fs.v2.container.AnnounceUsedSpaceResponse,
  /**
   * @param {!proto.neo.fs.v2.container.AnnounceUsedSpaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.neo.fs.v2.container.AnnounceUsedSpaceResponse.deserializeBinary
);


/**
 * @param {!proto.neo.fs.v2.container.AnnounceUsedSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neo.fs.v2.container.AnnounceUsedSpaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neo.fs.v2.container.AnnounceUsedSpaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neo.fs.v2.container.ContainerServiceClient.prototype.announceUsedSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/AnnounceUsedSpace',
      request,
      metadata || {},
      methodDescriptor_ContainerService_AnnounceUsedSpace,
      callback);
};


/**
 * @param {!proto.neo.fs.v2.container.AnnounceUsedSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neo.fs.v2.container.AnnounceUsedSpaceResponse>}
 *     Promise that resolves to the response
 */
proto.neo.fs.v2.container.ContainerServicePromiseClient.prototype.announceUsedSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/neo.fs.v2.container.ContainerService/AnnounceUsedSpace',
      request,
      metadata || {},
      methodDescriptor_ContainerService_AnnounceUsedSpace);
};


module.exports = proto.neo.fs.v2.container;


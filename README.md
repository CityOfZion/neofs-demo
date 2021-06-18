# neofs-demo

This is an example of a web-based [NeoFS](https://fs.neo.org/) app to create a NeoFS container and upload a file.

NeoFS uses the [gRPC](https://grpc.io/) protocol for client/server communication, which is not natively supported by browsers. There is the neofs-http-gw gateway with basic PUT/GET operations for file transfer, however, operations such as checking your NeoFS account balance or creating new containers and access control tables still require gRPC.

In order to access the full feature set of NeoFS from the web, this demo uses the [grpc-web](https://github.com/grpc/grpc-web) protocol in combination with the envoy gRPC proxy, which translates between grpc-web and gRPC.

## Gateway and Proxy Setup

In order to run this app, you must run an instance of neofs-http-gw and envoy.

[Releases · nspcc-dev/neofs-http-gw](https://github.com/nspcc-dev/neofs-http-gw/releases)

[Building - envoy 1.19.0-dev-acbd96 documentation](https://www.envoyproxy.io/docs/envoy/latest/start/building.html)

Run neofs-http-gw with the following command:

```
neofs-http-gw -p st1.storage.fs.neo.org:8080 --listen_address 127.0.0.1:8080
```

For envoy, create a new configuration file config.yaml with the following content:

```
admin:
  access_log_path: /tmp/admin_access.log
  address:
    socket_address: { address: 127.0.0.1, port_value: 9901 }

static_resources:
  listeners:
  - name: listener_0
    address:
      socket_address: { address: 127.0.0.1, port_value: 10000 }
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          codec_type: auto
          stat_prefix: ingress_http
          route_config:
            name: local_route
            virtual_hosts:
            - name: local_service
              domains: ["*"]
              routes:
              - match: { prefix: "/" }
                route:
                  cluster: neofs_service
                  timeout: 0s
                  max_stream_duration:
                    grpc_timeout_header_max: 0s
              cors:
                allow_origin_string_match:
                - prefix: "*"
                allow_methods: GET, PUT, DELETE, POST, OPTIONS
                allow_headers: keep-alive,user-agent,cache-control,content-type,content-transfer-encoding,custom-header-1,x-accept-content-transfer-encoding,x-accept-response-streaming,x-user-agent,x-grpc-web,grpc-timeout
                max_age: "1728000"
                expose_headers: custom-header-1,grpc-status,grpc-message
          http_filters:
          - name: envoy.filters.http.grpc_web
          - name: envoy.filters.http.cors
          - name: envoy.filters.http.router
  clusters:
  - name: neofs_service
    connect_timeout: 0.25s
    type: static
    http2_protocol_options: {}
    lb_policy: round_robin
    load_assignment:
      cluster_name: cluster_0
      endpoints:
        - lb_endpoints:
            - endpoint:
                address:
                  socket_address:
                    address: 157.90.176.145
                    port_value: 8080
            - endpoint:
                address:
                  socket_address:
                    address: 135.181.77.39
                    port_value: 8080
            - endpoint:
                address:
                  socket_address:
                    address: 135.181.79.214
                    port_value: 8080
            - endpoint:
                address:
                  socket_address:
                    address: 157.90.133.214
                    port_value: 8080
```

Then run envoy with the command:

```
envoy -c ./config.yaml
```

## App installation

```
git clone https://github.com/cityofzion/neofs-demo
cd neofs-demo
yarn
yarn start
```

Browse to [http://127.0.0.1:3000/](http://127.0.0.1:3000/) and log in using an N3 TestNet private key in order to begin.

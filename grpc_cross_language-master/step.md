# 1
install

```shell
1. https://grpc.io/docs/protoc-installation/
2. go get -u google.golang.org/grpc
3. go get -u google.golang.org/protobuf

pindah ke repo student lalu lakukan hal ini
protoc --go_out=paths=source_relative:. --go-grpc_out=paths=source_relative:. student/student.proto
```
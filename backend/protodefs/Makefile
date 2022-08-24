create:
	protoc --proto_path=proto proto/*.proto --go_out=gen/
	protoc --proto_path=proto proto/*.proto --go-grpc_out=gen/

clean:
	rm gen/proto/*.go

run_server:
	go mod tidy
	go run server/server.go

run_client:
	go mod tidy
	go run client/client.go
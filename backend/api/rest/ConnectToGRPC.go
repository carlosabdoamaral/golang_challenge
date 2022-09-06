package rest

import (
	"flag"
	"log"

	pb "github.com/Carlosabdoamaral/golang-challenge/protodefs/gen/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	Addr          = flag.String("addr", "localhost:50051", "the address to connect to")
	Conn          = connectToGRPCServer()
	PersonServer  = pb.NewPersonServiceClient(Conn)
	AddressServer = pb.NewAddressServiceClient(Conn)
)

func connectToGRPCServer() *grpc.ClientConn {
	flag.Parse()

	conn, err := grpc.Dial(*Addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("Error connecting to %v: %v", Addr, err)
	}

	return conn
}

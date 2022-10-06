package main

import (
	"context"
	"flag"
	"log"
	"net"

	"github.com/Carlosabdoamaral/golang-challenge/internal/firebaseOperations"
	pb "github.com/Carlosabdoamaral/golang-challenge/protodefs/gen/proto"
	"google.golang.org/grpc"
)

type address_server struct {
	pb.UnimplementedAddressServiceServer
}

type diary_server struct {
	pb.UnimplementedDiaryServiceServer
}

type person_server struct {
	pb.UnimplementedPersonServiceServer
}

func main() {
	flag.Parse()

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	serverGRPC := grpc.NewServer()
	pb.RegisterAddressServiceServer(serverGRPC, &address_server{})
	pb.RegisterDiaryServiceServer(serverGRPC, &diary_server{})
	pb.RegisterPersonServiceServer(serverGRPC, &person_server{})

	log.Printf("Server listening on %v", lis.Addr())
	if err := serverGRPC.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}

func (s *person_server) CreatePerson(c context.Context, req *pb.CreatePersonRequest) (*pb.CreatePersonReponse, error) {
	log.Println("CREATE PERSON RECEIVED")
	firebaseOperations.ConnectToFirestore()
	firebaseOperations.CreateUser(req)
	return &pb.CreatePersonReponse{
		Status: "OK",
	}, nil
}

func (s *address_server) CreateAddress(c context.Context, req *pb.NewAddressRequest) (*pb.NewAddressResponse, error) {
	log.Println("CREATE ADDRESS RECEIVED")
	firebaseOperations.CreateAddress(req)

	return &pb.NewAddressResponse{
		Status: "OK",
	}, nil
}

func (s *address_server) UpdateAddress(c context.Context, req *pb.NewAddressRequest) (*pb.NewAddressResponse, error) {
	log.Println("UPDATE ADDRESS RECEIVED")
	firebaseOperations.UpdateAddress(req)

	return &pb.NewAddressResponse{
		Status: "OK",
	}, nil
}

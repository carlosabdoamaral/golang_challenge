package main

import (
	pb "carlosamaral/gen/proto"
	"carlosamaral/server/repository"
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
)

type personServiceServer struct {
	pb.UnimplementedPersonServiceServer
}

func (s *personServiceServer) CreatePerson(c context.Context, req *pb.PersonModel) (*pb.CreatePersonResponse, error) {
	log.Println("Received CreatePerson request")

	res, err := repository.InsertPerson(req)
	if err != nil {
		log.Println(err)
	}

	return res, nil
}

func main() {
	listener, err := net.Listen("tcp", "localhost:8081")
	if err != nil {
		log.Println(err)
	}

	grpc_server := grpc.NewServer()
	pb.RegisterPersonServiceServer(grpc_server, &personServiceServer{})

	err = grpc_server.Serve(listener)
	if err != nil {
		log.Println(err)
	}
}

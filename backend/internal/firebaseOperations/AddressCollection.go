package firebaseOperations

import (
	"context"

	"cloud.google.com/go/firestore"
	pb "github.com/Carlosabdoamaral/golang-challenge/protodefs/gen/proto"
)

func CreateAddress(address *pb.NewAddressRequest) {
	Client.
		Collection("address").
		Doc(address.User).
		Create(context.Background(), address)
}

func UpdateAddress(address *pb.NewAddressRequest) {
	Client.
		Collection("address").
		Doc(address.User).
		Update(context.Background(), []firestore.Update{
			{Path: "City", Value: address.City},
			{Path: "Complement", Value: address.Complement},
			{Path: "Number", Value: address.Number},
			{Path: "State", Value: address.State},
			{Path: "Street", Value: address.Street},
		})
}

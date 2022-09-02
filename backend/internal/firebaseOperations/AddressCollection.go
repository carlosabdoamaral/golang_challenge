package firebaseOperations

import (
	"context"
	"time"

	"cloud.google.com/go/firestore"
	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
)

func CreateAddress(address models.Address) {
	client.
		Collection("address").
		Doc(address.User).
		Create(context.Background(), address)
}

func UpdateAddress(address models.Address) time.Time {
	client.
		Collection("address").
		Doc(address.User).
		Update(context.Background(), []firestore.Update{
			{Path: "City", Value: address.City},
			{Path: "Complement", Value: address.Complement},
			{Path: "Number", Value: address.Number},
			{Path: "State", Value: address.State},
			{Path: "Street", Value: address.Street},
		})

	return time.Now()
}

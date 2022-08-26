package firebaseOperations

import (
	"context"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
)

func CreateAddress(address models.Address) {
	client := ConnectToFirestore()
	client.Collection("address").NewDoc().Create(context.Background(), address)
}

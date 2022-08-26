package firebaseOperations

import (
	"context"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
)

func CreateUser(user models.User) {
	client := ConnectToFirestore()
	client.Collection("user").NewDoc().Create(context.Background(), user)
}

func CheckIfUserExists(cpf string) (bool, error) {
	//TODO: check if user exists
	client := ConnectToFirestore()
	iter := client.Collection("user").Where("Cpf", "==", cpf).Documents(context.Background())

	for {
		doc, err := iter.Next()

		switch {
		case doc.Data() != nil:
			return true, err
		case err != nil:
			return false, err
		default:
			return false, err
		}
	}
}

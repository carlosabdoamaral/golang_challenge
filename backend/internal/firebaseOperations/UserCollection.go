package firebaseOperations

import (
	"context"
	"log"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
	"google.golang.org/api/iterator"
)

func CreateUser(user models.User) {
	client := ConnectToFirestore()
	client.Collection("user").NewDoc().Create(context.Background(), user)
}

func CheckIfUserExists(cpf string) (bool, error) {
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

func GetAllUsers() []models.User {
	client := ConnectToFirestore()

	iter := client.Collection("user").Documents(context.Background())
	defer iter.Stop() // add this line to ensure resources cleaned up

	var users []models.User

	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Println(err)
		}

		var u models.User
		if err := doc.DataTo(&u); err != nil {
			log.Println(err)
		}

		users = append(users, u)
	}

	return users
}

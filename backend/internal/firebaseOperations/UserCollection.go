package firebaseOperations

import (
	"context"
	"log"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
	"google.golang.org/api/iterator"
)

func CreateUser(user models.User) {
	client.
		Collection("user").
		Doc(user.Cpf).
		Create(context.Background(), user)
}

func GetAllUsers() []models.FullUser {
	iter := client.Collection("user").Documents(context.Background())
	defer iter.Stop()

	var users []models.FullUser
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

		var fullUser models.FullUser = GetUserByCpf(u.Cpf)
		users = append(users, fullUser)
	}

	return users
}

func GetUserByCpf(cpf string) models.FullUser {
	user_res, err := client.Collection("user").Doc(cpf).Get(context.Background())
	if err != nil {
		log.Println("Error getting user", err)
	}
	var u models.User
	user_res.DataTo(&u)

	address_res, err := client.Collection("address").Doc(cpf).Get(context.Background())
	if err != nil {
		log.Println("Error getting address", err)
	}
	var a models.Address
	address_res.DataTo(&a)

	var fulluser models.FullUser
	fulluser.User = u
	fulluser.Address = a

	return fulluser
}

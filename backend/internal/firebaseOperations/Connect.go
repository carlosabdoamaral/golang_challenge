package firebaseOperations

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

func ConnectToFirestore() *firestore.Client {

	serviceAccount := option.WithCredentialsFile("./SA.json")
	app, err := firebase.NewApp(context.Background(), nil, serviceAccount)
	client, err := app.Firestore(context.Background())

	if err != nil {
		log.Fatalln(err)
	}

	return client
}

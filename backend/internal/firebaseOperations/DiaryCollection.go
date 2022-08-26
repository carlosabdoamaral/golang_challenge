package firebaseOperations

import (
	"context"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
)

func CreateDiary(diary models.Diary) {
	client := ConnectToFirestore()
	client.Collection("diary").NewDoc().Create(context.Background(), diary)
}

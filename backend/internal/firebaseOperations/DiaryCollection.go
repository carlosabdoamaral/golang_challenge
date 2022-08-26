package firebaseOperations

import (
	"context"
	"log"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
	"google.golang.org/api/iterator"
)

func CreateDiary(diary models.Diary) {
	client := ConnectToFirestore()
	client.Collection("diary").NewDoc().Create(context.Background(), diary)
}

func GetDiaryFromCpf(cpf string) []models.Diary {
	client := ConnectToFirestore()

	var diaryList []models.Diary

	iter := client.Collection("diary").Where("Cpf", "==", cpf).Documents(context.Background())
	for {
		doc, err := iter.Next()
		if err != nil {
			log.Println("Error!")
			log.Println(err)
		}

		if err == iterator.Done {
			break
		}

		var diary models.Diary
		doc.DataTo(&diary)

		diaryList = append(diaryList, diary)
	}

	return diaryList
}
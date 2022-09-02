package firebaseOperations

import (
	"context"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
)

func CreateDiary(diary models.Diary) {
	client.Collection("diary").NewDoc().Create(context.Background(), diary)
}

func GetDiaryFromCpf(cpf string) []models.Diary {
	var diaryList []models.Diary

	return diaryList
}

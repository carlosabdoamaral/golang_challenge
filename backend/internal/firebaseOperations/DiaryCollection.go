package firebaseOperations

import (
	"context"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
)

func CreateDiary(diary models.Diary) {
	Client.Collection("diary").Doc(diary.Author).Parent.Add(context.Background(), diary)
}

func GetDiaryFromCpf(cpf string) []models.Diary {
	var diaryList []models.Diary

	return diaryList
}

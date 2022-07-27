package model

import (
	"time"
)

type DiaryModel struct {
	Id_diary      uint      `json:"id_diary"`
	Id_person     uint      `json:"id_person"`
	Message_value string    `json:"message"`
	Diary_date    time.Time `json:"date"`
}

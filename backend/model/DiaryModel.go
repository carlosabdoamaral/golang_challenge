package model

type DiaryModel struct {
	Id       uint   `json:"id"`
	IdPerson uint   `json:"idPerson"`
	Message  string `json:"message"`
}

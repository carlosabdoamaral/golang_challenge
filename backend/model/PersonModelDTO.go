package model

type PersonModelDTO struct {
	Id       uint         `json:"id"`
	Username string       `json:"username"`
	Age      int          `json:"age"`
	Diary    []DiaryModel `json:"diary"`
	Address  AddressModel `json:"address"`
}

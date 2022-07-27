package main

type PersonModel struct {
	Id       uint   `json:"id"`
	Username string `json:"username"`
	Age      int    `json:"age"`
	// Diary   []DiaryModel `json:"diary"`
	// Address AddressModel `json:"address"`
}

type DiaryModel struct {
	Id       uint   `json:"id"`
	IdPerson uint   `json:"idPerson"`
	Message  string `json:"message"`
}

type AddressModel struct {
	Id           uint   `json:"id"`
	Street       string `json:"street"`
	Neighborhood string `json:"neighborhood"`
	City         string `json:"City"`
	IdPerson     uint   `json:"idPerson"`
}

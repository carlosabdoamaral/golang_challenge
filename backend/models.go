package main

type PersonModel struct {
	id      uint         `json:"id"`
	Name    string       `json:"name"`
	Age     int          `json:"age"`
	Diary   []DiaryModel `json:"diary"`
	Address AddressModel `json:"address"`
}

type DiaryModel struct {
	id       uint   `json:"id"`
	idPerson uint   `json:"idPerson"`
	Message  string `json:"message"`
}

type AddressModel struct {
	id           uint   `json:"id"`
	Street       string `json:"street"`
	Neighborhood string `json:"neighborhood"`
	City         string `json:"City"`
	idPerson     uint   `json:"idPerson"`
}

type TestModel struct {
	id       uint   `json:"id"`
	username string `json:"username"`
}

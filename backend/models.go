package main

type Person struct {
	id    uint   `json:"id"`
	Name  string `json:"name"`
	Age   int    `json:"age"`
	Diary Diary  `json:"diary"`
}

type Diary struct {
	id      uint   `json:"id"`
	Message string `json:"message"`
}

type Address struct {
	id           uint `json:"id"`
	Street       string
	Neighborhood string
	City         string
	idPerson     uint // So pode ser positivo
}

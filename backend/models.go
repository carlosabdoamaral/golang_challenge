package main

type Person struct {
	Name  string   `json:"name"`
	Age   int      `json:"age"`
	Diary []string `json:"diary"`
}

type Address struct {
	Street       string
	Neighborhood string
	City         string
	idPerson     uint // So pode ser positivo
}

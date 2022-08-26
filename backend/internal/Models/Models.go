package models

type Diary struct {
	Author  string `json:"author,omitempty"` // CPF
	Message string `json:"message,omitempty"`
}

type Address struct {
	User         string `json:"user,omitempty"` // CPF
	Street       string `json:"street,omitempty"`
	Neighborhood string `json:"neighborhood,omitempty"`
	City         string `json:"city,omitempty"`
}

type User struct {
	Fullname string `json:"fullname,omitempty"`
	Cpf      string `json:"cpf,omitempty"`
	Age      int    `json:"age,omitempty"`
}

type CreateUser struct {
	User    User    `json:"user,omitempty"`
	Address Address `json:"address,omitempty"`
	Diary   []Diary `json:"diary,omitempty"`
}

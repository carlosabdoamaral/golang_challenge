package models

type Diary struct {
	Author  string `json:"author,omitempty"` // CPF
	Message string `json:"message,omitempty"`
}

type Address struct {
	User       string `json:"user,omitempty"` // CPF
	Street     string `json:"street,omitempty"`
	State      string `json:"state,omitempty"`
	City       string `json:"city,omitempty"`
	Number     string `json:"number,omitempty"`
	Complement string `json:"complement,omitempty"`
}

type User struct {
	Fullname string `json:"name,omitempty"`
	Age      int    `json:"age,omitempty"`
	Cpf      string `json:"cpf,omitempty"`
}

type FullUser struct {
	User    User    `json:"user,omitempty"`
	Address Address `json:"address,omitempty"`
	Diary   []Diary `json:"diary,omitempty"`
}

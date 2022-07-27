package model

import "time"

type PersonModel struct {
	Id_person uint      `json:"id"`
	Username  string    `json:"username"`
	Age       int       `json:"age"`
	Cpf       string    `json:"cpf"`
	Cpf_doc   string    `json:"cpf_doc"`
	Email     string    `json:"email"`
	Birthdate time.Time `json:"birthdate"`
}

package repository

import (
	"database/sql"
	"fmt"
	"net/http"
	"root/model"
)

func ChangeAddress(a model.AddressModel) http.ConnState {
	// TODO: Mudar para uma variavel global chamada db
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 15432, "postgres", "root", "postgres")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	fmt.Println(db)

	// db.QueryRow(
	// 	"INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES($1, $2, $3, $4, $5, $6) RETURNING id_person;",
	// 	p.Username, p.Age, p.Cpf, p.Cpf_doc, p.Email, p.Birthdate,
	// )
	return http.StatusOK
}

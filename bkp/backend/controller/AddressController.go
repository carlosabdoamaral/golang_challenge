package controller

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"root/model"

	"github.com/gin-gonic/gin"
)

func ChangeAddress(c *gin.Context) {
	var a model.AddressModel
	body, error := ioutil.ReadAll(c.Request.Body)

	// TODO: Mudar para uma variavel global chamada db
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 15432, "postgres", "root", "postgres")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	// db.QueryRow(
	// 	"INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES($1, $2, $3, $4, $5, $6) RETURNING id_person;",
	// 	p.Username, p.Age, p.Cpf, p.Cpf_doc, p.Email, p.Birthdate,
	// )

	if error != nil {
		fmt.Println(error)
	}

	c.Request.Body.Close()
	json.Unmarshal([]byte(body), &a)
	c.IndentedJSON(http.StatusCreated, a)
	defer db.Close()
}

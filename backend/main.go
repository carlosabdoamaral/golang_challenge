package main

import (
	"database/sql"
	"fmt"

	"root/controller"

	"github.com/gin-gonic/gin"
)

var db *sql.DB

func main() {
	println()
	fmt.Println("Database...")
	ConfigDatabase()

	println()
	fmt.Println("Route...")
	ConfigRoutes()

	defer db.Close()
}

func ConfigRoutes() {
	router := gin.Default()
	router.GET("api/all", controller.AllPersons)
	router.POST("api/create", controller.CreatePerson)
	router.PUT("api/address", controller.ChangeAddress)
	router.POST("api/diary", controller.NewDiary)
	err := router.Run()
	if err != nil {
		return
	}
}

func ConfigDatabase() {
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 15432, "postgres", "root", "postgres")
	database, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	db = database

	fmt.Println("RUNNING QUERYS...")

	mainQuery := `
		DROP TABLE IF EXISTS person CASCADE;
		DROP TABLE IF EXISTS address CASCADE;
		DROP TABLE IF EXISTS diary CASCADE;
		CREATE TABLE person (id_person SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, age INT NOT NULL,cpf VARCHAR(11) NOT NULL, cpf_doc VARCHAR(5) NOT NULL, email VARCHAR(255) NOT NULL, birthdate DATE NOT NULL);
		CREATE TABLE address (id_address SERIAL PRIMARY KEY,id_person INT UNIQUE NOT NULL REFERENCES person(id_person),street VARCHAR(255) NOT NULL,neighborhood VARCHAR(255) NOT NULL,city VARCHAR(255) NOT NULL,zip VARCHAR(8) NOT NULL,isMain BOOL,nth INT NOT NULL,observation VARCHAR(255));
		CREATE TABLE diary (id_diary SERIAL PRIMARY KEY,id_person INT NOT NULL REFERENCES person(id_person),message_value VARCHAR(255) NOT NULL,diary_date timestamp);
	`

	insertQuery := `
		INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES('Template user', 18, '12345678910', '12345', 'user.template@gmail.com', '2004-03-02');
		INSERT INTO address(id_person, street, neighborhood, city, zip, ismain, nth, observation) VALUES (1, 'Rua', 'Bairro', 'Cidade', 'CEP', true, 1, '');
		INSERT INTO diary(id_person, message_value, diary_date) VALUES (1, 'Bem vindo! Via postgres', NOW());

		INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES('Template user 2', 21, '09876543210', '09876', 'user.template.2@gmail.com', '2001-07-05');
		INSERT INTO address(id_person, street, neighborhood, city, zip, ismain, nth, observation) VALUES (2, 'Rua', 'Bairro', 'Cidade', 'CEP', true, 1, '');
		INSERT INTO diary(id_person, message_value, diary_date) VALUES (2, 'Bem vindo! Via postgres', NOW());
	`

	db.Query(mainQuery)
	db.QueryRow(insertQuery)
}

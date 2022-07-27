package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	selectAllFromPersonQuery = "select * from person"
	createTablePerson        = "CREATE TABLE person (id INTEGER, username VARCHAR(255), age INTEGER)"
)

var (
	db *sql.DB
)

func ConfigDatabase() {
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "0.0.0.0", 5051, "postgres", "root", "postgres")
	database, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	db = database

	// db.Query("DROP TABLE IF EXISTS person")
	db.Query(createTablePerson)
	// db.Query("INSERT INTO person(id, username, age) VALUES (0, 'Carlos Amaral', 18);")
	SelectAllFromPerson()
}

func SelectAllFromPerson() []PersonModel {
	rows, err := db.Query(selectAllFromPersonQuery)

	var personList []PersonModel

	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	for rows.Next() {
		var person PersonModel
		if err := rows.Scan(&person.Id, &person.Username, &person.Age); err != nil {
			log.Fatal(err)
		}

		personList = append(personList, person)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	return personList
}

func InsertNewPerson(person PersonModel) {

}

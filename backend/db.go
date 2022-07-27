package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	selectAllFromPersonQuery = "select * from person"
	createTablePerson        = "CREATE TABLE person (id INTEGER, username VARCHAR(255)) IF NOT EXISTS"
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
	defer db.Close()

	ConfigTables()
	SelectAllFromPerson()
}

func ConfigTables() {
	db.Query(createTablePerson)
	// db.Query("INSERT INTO person(id, username) VALUES(1,'Example')")
}

func SelectAllFromPerson() {
	rows, err := db.Query(selectAllFromPersonQuery)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var persons = {
		
	}

	for rows.Next() {
		var test TestModel
		if err := rows.Scan(&test.id, &test.username); err != nil {
			log.Fatal(err)
		}

		persons = append(persons, test)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	fmt.Println(persons)
	return persons
}

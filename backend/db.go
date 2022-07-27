package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	selectAllFromPerson = "select * from person"
)

func ConfigDatabase() {
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "0.0.0.0", 5051, "postgres", "root", "postgres")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	defer db.Close()

	rows, err := db.Query(selectAllFromPerson)
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	for rows.Next() {
		var username string
		var id uint

		if err := rows.Scan(&username, &id); err != nil {
			log.Fatal(err)
		}

		fmt.Println(username, id)
	}
+
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

}

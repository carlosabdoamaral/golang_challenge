package repository

import (
	"database/sql"
	"fmt"
	"log"

	"root/model"

	_ "github.com/lib/pq"
)

func SelectAllFromPerson() []model.PersonModel {
	selectAllFromPersonQuery := "select * from person"
	var personList []model.PersonModel

	// TODO: Mudar para uma variavel global chamada db
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "0.0.0.0", 5051, "postgres", "root", "postgres")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
		println()
	}

	rows, err := db.Query(selectAllFromPersonQuery)
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	for rows.Next() {
		var person model.PersonModel
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

func InsertNewPerson(person model.PersonModel) {

}

package repository

import (
	"log"

	"github.com/Carlosabdoamaral/golang-challenge/model"
	"github.com/carlosabdoamaral/golang-challenge/model"
	_ "github.com/lib/pq"
)

func SelectAllFromPerson() []model.PersonModel {
	selectAllFromPersonQuery := "select * from person"
	rows, err := db.Query(selectAllFromPersonQuery)

	var personList []model.PersonModel

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

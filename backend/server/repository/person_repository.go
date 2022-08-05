package repository

import (
	"database/sql"
	"fmt"
	"log"

	pb "carlosamaral/gen/proto"
	"carlosamaral/server/database"
)

var db *sql.DB = database.Connect()

func InsertPerson(person *pb.PersonModel) (*pb.CreatePersonResponse, error) {
	_, err := db.Query(`INSERT INTO person(name, age) VALUES ($1, $2)`, person.Name, person.Age)
	if err != nil {
		return &pb.CreatePersonResponse{
			Status: "Failed: Creating person!",
		}, err
	}

	id_person, err := SelectPersonIdByName(person.Name)
	if err != nil {
		return &pb.CreatePersonResponse{
			Status: "Failed: Selecting person by name!",
		}, err
	}

	err = InsertAddress(id_person, person.Address)
	if err != nil {
		log.Println(err)
	}

	for _, message := range person.Diary {
		InsertMessage(id_person, message)
	}

	return &pb.CreatePersonResponse{Status: "Success!"}, nil
}

func InsertAddress(id_person int, address *pb.AddressModel) error {
	_, err := db.Query(`INSERT INTO address(id_person, street, neighborhood, city) VALUES($1, $2, $3, $4);`, id_person, address.Street, address.Neighborhood, address.City)
	if err != nil {
		return err
	}

	return nil
}

func SelectPersonIdByName(name string) (int, error) {
	query := fmt.Sprintf(`SELECT id_person FROM person WHERE name = '%s'`, name)
	rows, err := db.Query(query)

	if err != nil {
		return 0, err
	}

	var id_person int
	for rows.Next() {
		rows.Scan(
			&id_person,
		)
	}

	return id_person, nil
}

func InsertMessage(id_person int, message string) error {
	query := fmt.Sprintf(`INSERT INTO diary(id_person, message) VALUES (%d, '%s')`, id_person, message)
	_, err := db.Query(query)
	if err != nil {
		return err
	}

	return nil
}

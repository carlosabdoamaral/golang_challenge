package repository

import (
	"database/sql"
	"fmt"
	"log"

	"root/model"
	"root/utils"

	_ "github.com/lib/pq"
)

func SelectAllFromPerson() []model.PersonModelDTO {
	// selectAllFromPersonQuery := "SELECT * FROM person;"
	// SELECT * FROM person FULL OUTER JOIN address a  ON a.id_person = person.id_person WHERE person.id_person = 1
	selectAllFromPersonQuery := "SELECT * FROM person FULL OUTER JOIN address a  ON a.id_person = person.id_person "
	var personList []model.PersonModelDTO

	// TODO: Mudar para uma variavel global chamada db
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 15432, "postgres", "root", "postgres")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	rows, err := db.Query(selectAllFromPersonQuery)
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	for rows.Next() {
		var person model.PersonModel
		var address model.AddressModel

		scan := rows.Scan(
			&person.Id_person,
			&person.Username,
			&person.Age,
			&person.Cpf,
			&person.Cpf_doc,
			&person.Email,
			&person.Birthdate,
			&address.Id_address,
			&address.Id_person,
			&address.Street,
			&address.Neighborhood,
			&address.City,
			&address.Zip,
			&address.Ismain,
			&address.Nth,
			&address.Observation)

		if err := scan; err != nil {
			log.Fatal(err)
		}

		res, err := utils.ConvertSelectToPersonDTO(person, address)
		if err != nil {
			log.Fatal(err)
		}

		personList = append(personList, res)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	return personList
}

func InsertNewPerson(p model.PersonModelDTO) {
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

	// db.QueryRow(
	// 	"INSERT INTO address(id_person, street, neighborhood, city, zip, ismain, nth, observation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);",
	// 	conn, p.Address.Street, p.Address.Neighborhood, p.Address.City, p.Address.Zip, p.Address.Ismain, p.Address.Nth, p.Address.Observation,
	// )

	db.Query(
		`
		DO $$
		DECLARE lastid bigint;
		BEGIN
			INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES($1, $2, $3, $4, $5, $6)
			RETURNING id_person INTO lastid;
			INSERT INTO address(id_person, street, neighborhood, city, zip, ismain, nth, observation) VALUES (lastid, $7, $8, $9, $10, $11, $12, $13)
		END $$;
		`,
		p.Username, p.Age, p.Cpf, p.Cpf_doc, p.Email, p.Birthdate, p.Address.Street, p.Address.Neighborhood, p.Address.City, p.Address.Zip, p.Address.Ismain, p.Address.Nth, p.Address.Observation,
	)
}

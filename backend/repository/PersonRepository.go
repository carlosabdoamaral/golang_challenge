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
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "0.0.0.0", 5051, "postgres", "root", "golang_challenge")
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

func InsertNewPerson(person model.PersonModel) {

}

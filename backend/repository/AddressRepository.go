package repository

import (
	"database/sql"
	"fmt"
	"root/model"
)

func InsertNewAddress(a model.AddressModel) bool {
	// TODO: Mudar para uma variavel global chamada db
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "0.0.0.0", 5051, "postgres", "root", "postgres")
	db, err := sql.Open("postgres", conn)
	fmt.Println("🚀 ~ file: AddressRepository.go ~ line 13 ~ funcInsertNewAddress ~ db : ", db)

	if err != nil {
		fmt.Println("Aaa")
		panic(err)
	}

	return true
}

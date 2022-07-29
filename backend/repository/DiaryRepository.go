package repository

import (
	"database/sql"
	"fmt"
	"net/http"
	"root/model"
)

func InsertNewDiary(d model.DiaryModel) http.ConnState {
	// TODO: Mudar para uma variavel global chamada db
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 15432, "postgres", "root", "postgres")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	db.QueryRow(
		"INSERT INTO diary(id_person, message_value, diary_date) VALUES ($1, $2, NOW())",
		d.Id_person, d.Message_value,
	)

	defer db.Close()
	return http.StatusOK
}

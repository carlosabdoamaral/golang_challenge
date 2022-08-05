package database

import (
	"database/sql"
	_ "database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

func Connect() *sql.DB {
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 15432, "postgres", "root", "challenge")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	return db
}

func Config() {

}

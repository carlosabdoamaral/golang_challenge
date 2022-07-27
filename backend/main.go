package main

import (
	"database/sql"
	"fmt"

	"github.com/Carlosabdoamaral/golang-challenge/controller"
	"github.com/Carlosabdoamaral/golang-challenge/repository"
	"github.com/gin-gonic/gin"
)

var db *sql.DB

func main() {
	println()
	fmt.Println("Database...")
	ConfigDatabase()

	println()
	fmt.Println("Route...")
	ConfigRoutes()

	defer db.Close()
}

func ConfigRoutes() {
	router := gin.Default()
	router.GET("api/all", controller.AllPersons)
	router.POST("api/create", controller.CreatePerson)
	router.PUT("api/address", controller.ChangeAddress)
	router.POST("api/diary", controller.NewDiary)
	err := router.Run()
	if err != nil {
		return
	}
}

func ConfigDatabase() {

	// selectAllFromPersonQuery := "select * from person"
	createTablePerson := "CREATE TABLE person (id INTEGER, username VARCHAR(255), age INTEGER)"

	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "0.0.0.0", 5051, "postgres", "root", "postgres")
	database, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	db = database

	// db.Query("DROP TABLE IF EXISTS person")
	db.Query(createTablePerson)
	// db.Query("INSERT INTO person(id, username, age) VALUES (0, 'Carlos Amaral', 18);")
	repository.SelectAllFromPerson()
}

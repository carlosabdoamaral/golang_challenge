package main

import (
	"database/sql"
	"fmt"

	"root/controller"
	"root/repository"

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
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "0.0.0.0", 5051, "postgres", "root", "golang_challenge")
	database, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	db = database
	repository.SelectAllFromPerson()
}

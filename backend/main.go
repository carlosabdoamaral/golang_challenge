package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// TEMPLATE DATA
var users []Person

func main() {
	router := gin.Default()
	router.GET("api/create", createPerson)
	router.PUT("api/address", changeAddress)
	router.POST("api/diary", newDiary)
	err := router.Run()
	if err != nil {
		return
	}
}

func createPerson(c *gin.Context) {
	var u Person
	// u.Name = "Carlos Amaral"
	// u.Age = 18
	// u.Diary = []string{"Mensagem 1"}
	// users = append(users, u)

	if err := c.Bind(&u); err != nil {
		return
	}

	c.IndentedJSON(http.StatusCreated, u)
}

func changeAddress(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "Change address")
}

func newDiary(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "New Diary")
}

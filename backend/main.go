package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

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
	body, error := ioutil.ReadAll(c.Request.Body)
	if error != nil {
		fmt.Println(error)
	} else {
		c.Request.Body.Close()
	}

	json.Unmarshal([]byte(body), &u)
	c.IndentedJSON(http.StatusCreated, u)
}

func changeAddress(c *gin.Context) {
	var a Address
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	}

	c.Request.Body.Close()
	json.Unmarshal([]byte(body), &a)
	c.IndentedJSON(http.StatusCreated, a)
}

func newDiary(c *gin.Context) {
	var d Diary
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	}

	c.Request.Body.Close()

	json.Unmarshal([]byte(body), &d)
	c.IndentedJSON(http.StatusCreated, d)
}

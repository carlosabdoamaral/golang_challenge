package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ConfigRoutes() {
	router := gin.Default()
	router.GET("api/all", AllPersons)
	router.POST("api/create", CreatePerson)
	router.PUT("api/address", ChangeAddress)
	router.POST("api/diary", NewDiary)
	err := router.Run()
	if err != nil {
		return
	}
}

func CreatePerson(c *gin.Context) {
	var u PersonModel
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	} else {
		c.Request.Body.Close()
	}

	json.Unmarshal([]byte(body), &u)

	c.IndentedJSON(http.StatusCreated, u)
}

func AllPersons(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, SelectAllFromPerson)
}

func ChangeAddress(c *gin.Context) {
	var a AddressModel
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	}

	c.Request.Body.Close()
	json.Unmarshal([]byte(body), &a)
	c.IndentedJSON(http.StatusCreated, a)
}

func NewDiary(c *gin.Context) {
	var d DiaryModel
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	}

	c.Request.Body.Close()

	json.Unmarshal([]byte(body), &d)
	c.IndentedJSON(http.StatusCreated, d)
}

package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"root/model"
	"root/repository"

	"github.com/gin-gonic/gin"
)

func AllPersons(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

	var personList []model.PersonModelDTO = repository.SelectAllFromPerson()
	c.IndentedJSON(http.StatusOK, personList)
}

func CreatePerson(c *gin.Context) {
	var person model.PersonModelDTO
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	} else {
		c.Request.Body.Close()
	}

	json.Unmarshal([]byte(body), &person)

	repository.InsertNewPerson(person)

	c.IndentedJSON(http.StatusCreated, person)
}

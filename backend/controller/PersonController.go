package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/Carlosabdoamaral/golang-challenge/model"
	"github.com/Carlosabdoamaral/golang-challenge/repository"
	"github.com/gin-gonic/gin"
)

func AllPersons(c *gin.Context) {
	var personList []model.PersonModel = repository.SelectAllFromPerson()
	c.IndentedJSON(http.StatusOK, personList)
}

func CreatePerson(c *gin.Context) {
	var u model.PersonModel
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	} else {
		c.Request.Body.Close()
	}

	json.Unmarshal([]byte(body), &u)

	c.IndentedJSON(http.StatusCreated, u)
}

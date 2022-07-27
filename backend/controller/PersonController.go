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
	var personList []model.PersonModelDTO = repository.SelectAllFromPerson()
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

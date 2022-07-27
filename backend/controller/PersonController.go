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
	var personList []model.PersonModel = repository.SelectAllFromPerson()
	c.IndentedJSON(http.StatusOK, personList)
}

func CreatePerson(c *gin.Context) {
	var u model.PersonModelDTO
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	} else {
		c.Request.Body.Close()
	}

	json.Unmarshal([]byte(body), &u)

	var person model.PersonModel
	person.Id = u.Id
	person.Username = u.Username
	person.Age = u.Age

	var address model.AddressModel = u.Address
	var diary []model.DiaryModel = u.Diary

	fmt.Println("🚀 ~ file: PersonController.go ~ line 38 ~ funcCreatePerson ~ address : ", address)
	fmt.Println("🚀 ~ file: PersonController.go ~ line 39 ~ funcCreatePerson ~ diary : ", diary)
	fmt.Println("🚀 ~ file: PersonController.go ~ line 45 ~ funcCreatePerson ~ person : ", person)

	c.IndentedJSON(http.StatusCreated, u)
}

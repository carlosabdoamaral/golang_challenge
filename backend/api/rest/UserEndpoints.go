package rest

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
	"github.com/Carlosabdoamaral/golang-challenge/internal/firebaseOperations"
	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)
	defer c.Request.Body.Close()
	if err != nil {
		c.IndentedJSON(http.StatusConflict, "Something went wrong")
	}

	var userFromBody models.CreateUser
	json.Unmarshal([]byte(body), &userFromBody)

	userExists, _ := firebaseOperations.CheckIfUserExists(userFromBody.User.Cpf)

	if !userExists {
		firebaseOperations.CreateUser(userFromBody.User)
		firebaseOperations.CreateAddress(userFromBody.Address)
		for _, diary := range userFromBody.Diary {
			firebaseOperations.CreateDiary(diary)
		}

		c.IndentedJSON(http.StatusCreated, "Created!")
	} else {
		returnMessage := fmt.Sprintf("The user '%s' already exists", userFromBody.User.Fullname)
		c.IndentedJSON(http.StatusConflict, returnMessage)
	}
}

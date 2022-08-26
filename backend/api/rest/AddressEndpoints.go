package rest

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
	"github.com/Carlosabdoamaral/golang-challenge/internal/firebaseOperations"
	"github.com/gin-gonic/gin"
)

func ChangeAddress(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)
	defer c.Request.Body.Close()
	if err != nil {
		c.IndentedJSON(http.StatusConflict, "Something went wrong")
	}

	var userFromBody models.CreateUser
	json.Unmarshal([]byte(body), &userFromBody)

	firebaseOperations.CreateUser(userFromBody.User)
	firebaseOperations.CreateAddress(userFromBody.Address)
	for _, diary := range userFromBody.Diary {
		firebaseOperations.CreateDiary(diary)
	}

	c.IndentedJSON(http.StatusCreated, "Created!")
}

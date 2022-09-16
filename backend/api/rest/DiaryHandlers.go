package rest

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
	"github.com/Carlosabdoamaral/golang-challenge/internal/firebaseOperations"
	"github.com/gin-gonic/gin"
)

func CreateDiary(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)
	defer c.Request.Body.Close()
	if err != nil {
		c.IndentedJSON(http.StatusConflict, "Something went wrong")
	}

	var diary models.Diary
	json.Unmarshal([]byte(body), &diary)

	firebaseOperations.CreateDiary(diary)
	c.IndentedJSON(http.StatusCreated, "Created!")
}

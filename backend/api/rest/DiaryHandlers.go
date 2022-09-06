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

	var diaryList []models.Diary
	json.Unmarshal([]byte(body), &diaryList)

	for _, diary := range diaryList {
		if err != nil {
			c.IndentedJSON(http.StatusConflict, "Some error occurred while checking if user exists")
		}

		//TODO: Validar se o usuário existe
		firebaseOperations.CreateDiary(diary)
		c.IndentedJSON(http.StatusCreated, "Created!")
	}
}

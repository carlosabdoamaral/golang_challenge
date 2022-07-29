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

func NewDiary(c *gin.Context) {
	var d model.DiaryModel
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	}

	c.Request.Body.Close()

	json.Unmarshal([]byte(body), &d)
	res := repository.InsertNewDiary(d)
	switch res {
	case http.StatusOK:
		c.IndentedJSON(http.StatusCreated, d)
	default:
		c.IndentedJSON(http.StatusInternalServerError, http.StatusInternalServerError)
	}
}

package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"root/model"
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
	c.IndentedJSON(http.StatusCreated, d)
}

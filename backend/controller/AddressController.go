package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"root/model"
	"github.com/gin-gonic/gin"
)

func ChangeAddress(c *gin.Context) {
	var a model.AddressModel
	body, error := ioutil.ReadAll(c.Request.Body)

	if error != nil {
		fmt.Println(error)
	}

	c.Request.Body.Close()
	json.Unmarshal([]byte(body), &a)
	c.IndentedJSON(http.StatusCreated, a)
}

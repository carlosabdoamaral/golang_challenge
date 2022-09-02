package rest

import (
	"encoding/json"
	"github.com/Carlosabdoamaral/golang-challenge/internal/firebaseOperations"
	"io/ioutil"
	"net/http"

	models "github.com/Carlosabdoamaral/golang-challenge/internal/Models"
	"github.com/gin-gonic/gin"
)

func ChangeAddress(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)
	defer c.Request.Body.Close()

	if err != nil {
		c.IndentedJSON(http.StatusConflict, "Something went wrong")
	}

	var addressFromBody models.Address
	err = json.Unmarshal([]byte(body), &addressFromBody)
	if err != nil {
		return
	}

	time := firebaseOperations.UpdateAddress(addressFromBody)

	c.IndentedJSON(http.StatusOK, time)
}

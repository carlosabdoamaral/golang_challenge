package rest

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"net/http"

	pb "github.com/Carlosabdoamaral/golang-challenge/protodefs/gen/proto"
	"github.com/gin-gonic/gin"
)

func CreateAddress(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)
	defer c.Request.Body.Close()
	if err != nil {
		c.IndentedJSON(http.StatusConflict, "Something went wrong")
	}

	var addressFromBody *pb.NewAddressRequest
	err = json.Unmarshal([]byte(body), &addressFromBody)
	if err != nil {
		return
	}

	AddressServer.ChangeAddress(context.Background(), addressFromBody)

	c.IndentedJSON(http.StatusOK, "OK")
}

func ChangeAddress(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)
	defer c.Request.Body.Close()

	if err != nil {
		c.IndentedJSON(http.StatusConflict, "Something went wrong")
	}

	var addressFromBody *pb.NewAddressRequest
	err = json.Unmarshal([]byte(body), &addressFromBody)
	if err != nil {
		return
	}

	AddressServer.NewAddress(context.Background(), addressFromBody)

	c.IndentedJSON(http.StatusOK, "OK")
}

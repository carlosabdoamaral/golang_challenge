package rest

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/Carlosabdoamaral/golang-challenge/internal/firebaseOperations"
	pb "github.com/Carlosabdoamaral/golang-challenge/protodefs/gen/proto"
	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)
	defer c.Request.Body.Close()
	if err != nil {
		c.IndentedJSON(http.StatusConflict, "Something went wrong")
	}

	var userFromBody *pb.CreateFullPersonRequest
	json.Unmarshal([]byte(body), &userFromBody)
	PersonServer.CreatePerson(context.Background(), userFromBody)

	c.IndentedJSON(http.StatusCreated, "Created!")
}

func GetAllUsers(c *gin.Context) {
	res := firebaseOperations.GetAllUsers()
	c.IndentedJSON(http.StatusOK, res)
}

func GetUserByCpf(c *gin.Context) {
	cpf := c.Param("cpf")
	res := firebaseOperations.GetUserByCpf(cpf)
	c.IndentedJSON(http.StatusOK, res)
}

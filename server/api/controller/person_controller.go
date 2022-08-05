package controller

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	pb "carlosamaral/gen/proto"

	"github.com/gin-gonic/gin"
	"google.golang.org/grpc"
)

func CreatePerson(c *gin.Context) {
	conn, err := grpc.Dial("localhost:8081", grpc.WithInsecure())
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, fmt.Sprintf("Error while connecting to server: %s", err))
	}

	var person pb.PersonModel
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Printf("Error while reading body: %s", err)
	}

	json.Unmarshal([]byte(body), &person)

	client := pb.NewPersonServiceClient(conn)
	client.CreatePerson(context.Background(), &person)

	defer conn.Close()
	c.IndentedJSON(http.StatusOK, "OK")
}

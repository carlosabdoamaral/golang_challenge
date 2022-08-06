package controller

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	pb "carlosamaral/gen/proto"
	"carlosamaral/server/api/model"
	"carlosamaral/server/api/utils"

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

func AlterAddress(c *gin.Context) {
	conn, err := grpc.Dial("localhost:8081", grpc.WithInsecure())
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, "Error while connecting to server")
	}

	var new_address pb.AlterAddressRequest
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Printf("Error while reading body: %s", err)
	}

	json.Unmarshal([]byte(body), &new_address)

	client := pb.NewPersonServiceClient(conn)
	client.AlterAddress(context.Background(), &new_address)
	defer conn.Close()

	c.IndentedJSON(http.StatusOK, "OK")
}

func PostDiary(c *gin.Context) {
	var diary model.Diary
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Println(err)
	}

	json.Unmarshal([]byte(body), &diary)

	utils.AppendMessageToRabbitQueue(diary.Id_person, diary.Message)

	c.IndentedJSON(http.StatusOK, "Successfully added message to queue")
}

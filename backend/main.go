package main

import (
	"github.com/Carlosabdoamaral/golang-challenge/api/rest"
	"github.com/Carlosabdoamaral/golang-challenge/internal/middlewares"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(middlewares.CORS())

	api := router.Group("/api")
	v1 := api.Group("/v1")

	userGroup := v1.Group("/user")
	userGroup.POST("/create", rest.CreateUser)
	userGroup.GET("/all", rest.GetAllUsers)
	userGroup.GET("/cpf/:cpf", rest.GetUserByCpf)

	addressGroup := v1.Group("/address")
	addressGroup.PUT("/update", rest.ChangeAddress)

	diaryGroup := v1.Group("/diary")
	diaryGroup.POST("/new", rest.CreateDiary)

	err := router.Run(":1234")
	if err != nil {
		return
	}
}

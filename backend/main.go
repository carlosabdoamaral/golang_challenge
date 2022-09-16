package main

import (
	"github.com/Carlosabdoamaral/golang-challenge/api/rest"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(CORS())

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

	err := router.Run(":8080")
	if err != nil {
		return
	}
}

func CORS() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

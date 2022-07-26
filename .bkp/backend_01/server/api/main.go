package main

import (
	"carlosamaral/server/api/controller"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(CORS())
	api := router.Group("/api")

	api.POST("/challenge/new", controller.CreatePerson)
	api.PUT("/address/alter", controller.AlterAddress)
	api.POST("/diary/new", controller.PostDiary)

	err := router.Run()
	if err != nil {
		log.Println(err)
	}
}

// https://github.com/gin-contrib/cors/issues/29
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

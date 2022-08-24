package rest

import (
	"github.com/Carlosabdoamaral/golang-challenge/api/rest/person"
	"github.com/Carlosabdoamaral/golang-challenge/internal/middlewares"
	"github.com/gin-gonic/gin"
)

func RunRestRoutes() {
	router := gin.Default()
	router.Use(middlewares.CORS())

	api := router.Group("/api")
	v1 := api.Group("/v1")
	v1.POST("/person/create", person.Create)
	v1.PUT("/address/change", person.Create)
	v1.POST("/diary/new", person.Create)

	router.Use(middlewares.CORS())
	router.Run(":1234")
}

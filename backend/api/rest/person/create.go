package person

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Create(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "CREATED!")
}

package diary

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func New(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "CREATED!")
}

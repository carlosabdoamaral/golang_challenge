package address

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Change(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "CREATED!")
}

package main

import (
	"fmt"
)

func main() {
	fmt.Println("Starting...")
	ConfigDatabase()

	fmt.Println("Starting...")
	ConfigRoutes()

	defer db.Close()
}

package main

import (
	"fmt"
)

func main() {
	println()
	fmt.Println("Database...")
	ConfigDatabase()

	println()
	fmt.Println("Route...")
	ConfigRoutes()

	defer db.Close()
}

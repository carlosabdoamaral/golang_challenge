package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"github.com/streadway/amqp"
	"log"
)

func main() {
	fmt.Println("Coonsumer starting...")

	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	if err != nil {
		log.Println(err)
	}

	ch, err := conn.Channel()
	if err != nil {
		log.Println(err)
	}

	messages, err := ch.Consume(
		"DiaryQueue",
		"",
		true,
		false,
		false,
		false,
		nil,
	)
	if err != nil {
		log.Println(err)
	}

	forever := make(chan bool)
	go func() {
		for message := range messages {
			fmt.Printf("Message: %s\n", message.Body)
			RabbitInsertMessage(16, string(message.Body))
		}
	}()

	fmt.Println("Successfully connected")
	fmt.Println("[*] - Waiting for messages")

	<-forever

	defer ch.Close()
	defer conn.Close()
}

func RabbitInsertMessage(id_person int, message string) error {
	conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 15432, "postgres", "root", "challenge")
	db, err := sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}

	query := fmt.Sprintf(`INSERT INTO diary(id_person, message) VALUES (%d, '%s')`, id_person, message)
	_, err = db.Query(query)
	if err != nil {
		return err
	}

	defer db.Close()
	return nil
}

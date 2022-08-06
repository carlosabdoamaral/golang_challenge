package main

import (
	"fmt"
	"log"

	"github.com/streadway/amqp"
)

var (
	rabbit_ch   *amqp.Channel
	rabbit_conn *amqp.Connection
)

func main() {
	fmt.Println("Starting...")

	fmt.Println("Connecting to rabbitmq...")
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	if err != nil {
		log.Println(err)
	}
	fmt.Println("Connected!")
	rabbit_conn = conn

	CreateQueue()
}

func CreateQueue() {
	ch, err := rabbit_conn.Channel()
	if err != nil {
		log.Println(err)
	}
	rabbit_ch = ch

	q, err := ch.QueueDeclare(
		"DiaryQueue",
		false,
		false,
		false,
		false,
		nil,
	)
	if err != nil {
		log.Println(err)
	}

	fmt.Println(q)
}

func AppendMessageToRabbitQueue(id_person string, message string) error {
	err := rabbit_ch.Publish(
		"",
		"DiaryQueue",
		false,
		false,
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(message),
		},
	)

	if err != nil {
		log.Println(err)
		return err
	}

	log.Println("Successfully added message to queue")
	return nil
}

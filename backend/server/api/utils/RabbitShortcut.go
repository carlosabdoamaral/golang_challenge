package utils

import (
	"fmt"
	"log"

	"github.com/streadway/amqp"
)

func AppendMessageToRabbitQueue(id_person int, message string) error {
	rabbit_conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	if err != nil {
		log.Println(err)
	}

	rabbit_ch, err := rabbit_conn.Channel()
	if err != nil {
		log.Println(err)
	}

	err = rabbit_ch.Publish(
		"",
		"DiaryQueue",
		false,
		false,
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(fmt.Sprintf(`%d#%s`, id_person, message)),
		},
	)

	if err != nil {
		log.Println(err)
		return err
	}

	log.Println("Successfully added message to queue")
	return nil
}

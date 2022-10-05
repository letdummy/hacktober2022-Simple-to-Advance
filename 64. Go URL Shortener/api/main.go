package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleWare/logger"
	"github.com/joho/godotenv"
)

func setupRoutes(app *fiber.App){
	app.Get("/:url", routes.ResolveURL)
	app.Post("/api/v1", routes.ShortenURL)
}

func main() {
	err := godotenv.Load()

	if err!=nil {
		fmt.Println(err)
	}
	app := fiber.New()

	app.use(logger.New())

	setupRoutes(app)

	log.Fatal(app.Listen(os.Getenv(("APP_PORT"))))
}
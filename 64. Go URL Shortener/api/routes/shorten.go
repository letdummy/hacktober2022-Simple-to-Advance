package routes

import (
	"time"
)

 type request struct {
	URL				string					`json:"url"`
	CustomShort		string					`json:"short"`
	Expiry			time.Duration			`json:"expiry"`
 }

 type response struct {
	URL						string			`json:"url"`
	CustomShort				string			`json:"short"`
	Expiry				    time.Duration	`json:"expiry"`
	XRateRemaining          int				`json:"rate_limit"`
	XRateLimitTest		    time.Duration	`json:"rate_limit_remaining"`
 }

 func  ShortenURL(c *fiber.Ctx) error {
	body := new(request)

	if err:= c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error":"cannot parse JSON"})

	}

	//rate limiting



	//check if inpuit sent is an actual url


	//check for domain error
 }
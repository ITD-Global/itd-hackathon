package main

import (
	"fmt"
	"github.com/ITD-Global/itd-hackathon-backend/internal/controllers"
	"github.com/ITD-Global/itd-hackathon-backend/internal/repositories"
	"github.com/ITD-Global/itd-hackathon-backend/internal/services"
	"github.com/go-chi/chi/v5"
	"github.com/joho/godotenv"
	"log"
	"net/http"
)

func Config(r *chi.Mux) {

	var err error

	err = godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
		return
	}

	err = godotenv.Load(".env")

	if err != nil {
		fmt.Println("Error loading environment")
		return
	}

	parcelRepository := repositories.NewParcelRepository()
	parcelService := services.NewParcelService(parcelRepository)
	agentService := services.NewAgentService()
	//chatService := services.NewChatService(agentService)

	quoteService := services.NewQuoteService(agentService)
	parcelController := controllers.NewParcelController(parcelService)
	quoteController := controllers.NewQuoteController(quoteService)

	r.Post("/parcel", parcelController.ParcelMux)
	r.Post("/quote", quoteController.QuoteMux)

	err = http.ListenAndServe(fmt.Sprintf(":%d", 8080), r)

	if err != nil {
		fmt.Println("Error starting HTTP server")
		return
	}

}

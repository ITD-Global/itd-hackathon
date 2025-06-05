package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/ITD-Global/itd-hackathon-backend/internal/controllers"
	"github.com/ITD-Global/itd-hackathon-backend/internal/repositories"
	"github.com/ITD-Global/itd-hackathon-backend/internal/services"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"
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

	// Add CORS middleware
	r.Use(middleware.Logger)
	r.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}

			next.ServeHTTP(w, r)
		})
	})

	parcelRepository := repositories.NewParcelRepository()
	parcelService := services.NewParcelService(parcelRepository)
	agentService := services.NewAgentService()
	//chatService := services.NewChatService(agentService)

	quoteService := services.NewQuoteService(agentService)
	parcelController := controllers.NewParcelController(parcelService)
	quoteController := controllers.NewQuoteController(quoteService)

	r.Post("/parcel", parcelController.ParcelMux)
	r.Post("/quote", quoteController.QuoteMux)

	fmt.Println("Starting server on port 8080...")
	err = http.ListenAndServe(fmt.Sprintf(":%d", 8080), r)

	if err != nil {
		fmt.Println("Error starting HTTP server:", err)
		return
	}

}

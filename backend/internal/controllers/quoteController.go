package controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
	"github.com/ITD-Global/itd-hackathon-backend/internal/services"
)

type IQuoteController interface {
	QuoteMux(w http.ResponseWriter, r *http.Request)
}

type QuoteController struct {
	quoteService services.IQuoteService
}

func NewQuoteController(quoteService services.IQuoteService) IQuoteController {
	return &QuoteController{
		quoteService: quoteService,
	}
}

func (c *QuoteController) QuoteMux(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	// Handle preflight requests
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	body, err := io.ReadAll(r.Body)

	if err != nil {
		errorResponse := dtos.ErrorResponse{
			Error:   "READ_ERROR",
			Message: "Error reading request body",
		}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(errorResponse)
		return
	}

	var request dtos.QuoteRequest

	err = json.Unmarshal(body, &request)

	if err != nil {
		fmt.Println(err)
		errorResponse := dtos.ErrorResponse{
			Error:   "PARSE_ERROR",
			Message: "Error parsing request JSON",
		}
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(errorResponse)
		return
	}

	quoteResponse, err := c.quoteService.GetQuote(request)

	if err != nil {
		errorResponse := dtos.ErrorResponse{
			Error:   "SERVICE_ERROR",
			Message: "Error generating quote",
		}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(errorResponse)
		return
	}

	w.WriteHeader(http.StatusOK)
	err = json.NewEncoder(w).Encode(quoteResponse)
}

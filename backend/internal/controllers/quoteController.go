package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
	"github.com/ITD-Global/itd-hackathon-backend/internal/services"
	"io"
	"net/http"
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
	body, err := io.ReadAll(r.Body)

	if err != nil {
		http.Error(w, "error reading request", http.StatusInternalServerError)
		return
	}

	var request dtos.QuoteRequest

	err = json.Unmarshal(body, &request)

	if err != nil {
		fmt.Println(err)
		http.Error(w, "error mapping request", http.StatusInternalServerError)
		return
	}

	quoteResponse, err := c.quoteService.GetQuote(request)

	if err != nil {
		http.Error(w, "generating response", http.StatusInternalServerError)
		return
	}

	err = json.NewEncoder(w).Encode(quoteResponse)
}

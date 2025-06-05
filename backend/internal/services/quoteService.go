package services

import (
	"encoding/json"

	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
)

type IQuoteService interface {
	GetQuote(request dtos.QuoteRequest) (dtos.QuoteResponse, error)
}

type QuoteService struct {
	AgentService IAgentService
}

func NewQuoteService(agentService IAgentService) IQuoteService {
	return &QuoteService{
		AgentService: agentService,
	}
}

func (q *QuoteService) GetQuote(request dtos.QuoteRequest) (dtos.QuoteResponse, error) {
	responseText, err := q.AgentService.GetQuoteFromAzureOpenAI(request)
	if err != nil {
		return dtos.QuoteResponse{}, err
	}

	var quoteResp dtos.QuoteResponse
	if err := json.Unmarshal([]byte(responseText), &quoteResp); err != nil {
		return dtos.QuoteResponse{}, err
	}

	return quoteResp, nil
}

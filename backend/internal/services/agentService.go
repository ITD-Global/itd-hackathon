package services

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
)

type IAgentService interface {
	GetQuoteFromAzureOpenAI(request dtos.QuoteRequest) (string, error)
}

type AgentService struct {
	apiKey         string
	endpoint       string
	deploymentName string
	apiVersion     string
}

func NewAgentService() IAgentService {
	return &AgentService{
		apiKey:   os.Getenv("API_KEY"),
		endpoint: "https://itd-openai-devs.openai.azure.com/openai/deployments/gpt-4.1/chat/completions?api-version=2025-01-01-preview", // or your actual version
	}
}

type openAIMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type openAIRequest struct {
	Messages []openAIMessage `json:"messages"`
}

type openAIResponse struct {
	Choices []struct {
		Message openAIMessage `json:"message"`
	} `json:"choices"`
}

func (a *AgentService) GetQuoteFromAzureOpenAI(request dtos.QuoteRequest) (string, error) {

	userInput, err := json.Marshal(request)
	if err != nil {
		return "", err
	}

	messages := []openAIMessage{
		{
			Role: "system",
			Content: `
You are a logistics pricing assistant. 
Scan and scrape UPS website for all surcharges and taxes for a shipment with the given dimensions, weight, sender and reciever postcodes and speed.Return a shipping quote in JSON format using the input provided
Also provide an estimated arrival date for the shipment
Do not add notes as I want to convert your return text to a json format using in the below format:
{
  "estimatedAt": "2024-06-20T00:00:00Z",
  "currency": "GBP",
  "prices": [
    {
      "amount": 11.50,
      "charge": "base charge (standard 5-7 days)"
    },
    ...
  ]
}
`,
		},
		{
			Role:    "user",
			Content: fmt.Sprintf("Quote request: %s", string(userInput)),
		},
	}

	body := openAIRequest{Messages: messages}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		return "", err
	}

	req, err := http.NewRequest("POST", a.endpoint, bytes.NewBuffer(jsonBody))
	if err != nil {
		return "", err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("api-key", a.apiKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var openAIResp openAIResponse
	if err := json.NewDecoder(resp.Body).Decode(&openAIResp); err != nil {
		return "", err
	}

	if len(openAIResp.Choices) == 0 {
		return "", fmt.Errorf("no response choices returned from Azure OpenAI")
	}

	return openAIResp.Choices[0].Message.Content, nil
}

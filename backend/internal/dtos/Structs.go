package dtos

import "time"

type ParcelRequest struct {
	TrackingID string `json:"trackingId"`
}

type ParcelResponse struct {
	Expected time.Time      `json:"expected"`
	History  []ParcelStatus `json:"history"`
}

type ParcelStatus struct {
	Status string    `json:"status"`
	Time   time.Time `json:"time"`
}

type ErrorResponse struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

type TrackingEvent struct {
	StatusCode    string    `json:"statusCode"`
	StatusTime    time.Time `json:"statusTime"`
	TrackingEvent string    `json:"trackingEvent"`
}

type QuoteRequest struct {
	Weight           float64 `json:"weight"`
	Length           float64 `json:"length"`
	Height           float64 `json:"height"`
	Width            float64 `json:"width"`
	SenderPostcode   string  `json:"senderPostcode"`
	ReceiverPostcode string  `json:"receiverPostcode"`
	ServiceSpeed     string  `json:"serviceSpeed"`
}

type QuoteResponse struct {
	Prices      []Price   `json:"prices"`
	EstimatedAt time.Time `json:"estimatedAt"`
	Currency    string    `json:"currency,omitempty"`
}

type Price struct {
	Amount float64 `json:"amount"`
	Charge string  `json:"charge"`
}

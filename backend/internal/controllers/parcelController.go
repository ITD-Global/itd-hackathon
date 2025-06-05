package controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
	"github.com/ITD-Global/itd-hackathon-backend/internal/services"
)

type IParcelController interface {
	ParcelMux(w http.ResponseWriter, r *http.Request)
}

type ParcelController struct {
	parcelService services.IParcelService
}

func NewParcelController(parcelService services.IParcelService) IParcelController {
	return &ParcelController{
		parcelService: parcelService,
	}
}

func (c *ParcelController) ParcelMux(w http.ResponseWriter, r *http.Request) {
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

	var request dtos.ParcelRequest

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

	parcelResponse, err := c.parcelService.GetTrackingInfo(request.TrackingID)

	if err != nil {
		errorResponse := dtos.ErrorResponse{
			Error:   "SERVICE_ERROR",
			Message: "Error retrieving tracking information",
		}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(errorResponse)
		return
	}

	w.WriteHeader(http.StatusOK)
	err = json.NewEncoder(w).Encode(parcelResponse)
}

package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
	"github.com/ITD-Global/itd-hackathon-backend/internal/services"
	"io"
	"net/http"
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
	body, err := io.ReadAll(r.Body)

	if err != nil {
		http.Error(w, "error reading request", http.StatusInternalServerError)
		return
	}

	var request dtos.ParcelRequest

	err = json.Unmarshal(body, &request)

	if err != nil {
		fmt.Println(err)
		http.Error(w, "error mapping request", http.StatusInternalServerError)
		return
	}

	parcelResponse, err := c.parcelService.GetTrackingInfo(request.TrackingID)

	if err != nil {
		http.Error(w, "generating response", http.StatusInternalServerError)
		return
	}

	err = json.NewEncoder(w).Encode(parcelResponse)
}

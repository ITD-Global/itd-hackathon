package services

import (
	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
	"github.com/ITD-Global/itd-hackathon-backend/internal/repositories"
)

type IParcelService interface {
	GetTrackingInfo(barcode string) (dtos.ParcelResponse, error)
}

type ParcelService struct {
	ParcelRepository repositories.IParcelRepository
}

func NewParcelService(parcelRepo repositories.IParcelRepository) IParcelService {
	return &ParcelService{
		ParcelRepository: parcelRepo,
	}
}

func (p ParcelService) GetTrackingInfo(barcode string) (dtos.ParcelResponse, error) {
	events, expectedTime, err := p.ParcelRepository.FetchTrackingEvents(barcode)

	if err != nil {
		return dtos.ParcelResponse{}, err
	}

	response := dtos.ParcelResponse{}

	for _, event := range events {
		response.History = append(response.History, dtos.ParcelStatus{Status: event.TrackingEvent, Time: event.StatusTime})
	}

	response.Expected = expectedTime

	return response, nil
}

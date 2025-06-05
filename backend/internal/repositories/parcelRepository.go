package repositories

import (
	"fmt"
	"github.com/ITD-Global/itd-hackathon-backend/internal/dtos"
	"time"
)

type IParcelRepository interface {
	FetchTrackingEvents(barcode string) ([]dtos.TrackingEvent, time.Time, error)
}

type ParcelRepository struct {
}

func NewParcelRepository() IParcelRepository {
	return &ParcelRepository{}
}
func (c *ParcelRepository) FetchTrackingEvents(barcode string) ([]dtos.TrackingEvent, time.Time, error) {
	fmt.Println("Fetching tracking events")

	if barcode == "SNC123456789" {
		return []dtos.TrackingEvent{}, time.Now().Add(-48 * time.Hour), nil
	}

	if barcode == "SNC987654321" {
		return []dtos.TrackingEvent{
			{StatusCode: "PICKED_UP", StatusTime: time.Now().Add(-72 * time.Hour), TrackingEvent: "Parcel picked up from sender"},
			{StatusCode: "IN_TRANSIT", StatusTime: time.Now().Add(-48 * time.Hour), TrackingEvent: "Parcel in transit"},
			{StatusCode: "OUT_FOR_DELIVERY", StatusTime: time.Now().Add(-3 * time.Hour), TrackingEvent: "Parcel out for delivery"},
			{StatusCode: "DELIVERED", StatusTime: time.Now().Add(-1 * time.Hour), TrackingEvent: "Parcel delivered"},
		}, time.Now().Add(8 * time.Hour), nil
	}

	if barcode == "SNC112233445" {
		return []dtos.TrackingEvent{
			{StatusCode: "PICKED_UP", StatusTime: time.Now().Add(-24 * time.Hour), TrackingEvent: "Package picked up"},
			{StatusCode: "SORTING", StatusTime: time.Now().Add(-20 * time.Hour), TrackingEvent: "Package sorted at facility"},
		}, time.Now().Add(8 * time.Hour), nil
	}

	if barcode == "SNC998877665" {
		return []dtos.TrackingEvent{
			{StatusCode: "PICKED_UP", StatusTime: time.Now().Add(-5 * time.Hour), TrackingEvent: "Shipment received"},
		}, time.Now().Add(8 * time.Hour), nil
	}

	if barcode == "SNC556677889" {
		return []dtos.TrackingEvent{
			{StatusCode: "IN_TRANSIT", StatusTime: time.Now().Add(-36 * time.Hour), TrackingEvent: "In transit to destination"},
			{StatusCode: "HELD", StatusTime: time.Now().Add(-6 * time.Hour), TrackingEvent: "Held at customs"},
		}, time.Now().Add(8 * time.Hour), nil
	}

	// Default fallback
	return []dtos.TrackingEvent{
		{StatusCode: "UNKNOWN", StatusTime: time.Now(), TrackingEvent: "Barcode not found"},
	}, time.Now(), nil
}

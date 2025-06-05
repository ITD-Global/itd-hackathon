# ITD Hackathon 2025 - Backend API

This is the backend service for the ITD Hackathon 2025 project, written in Go. It provides two main endpoints: one for retrieving parcel tracking status and another for generating shipping quotes based on package dimensions and postcodes.

## 🛠 Tech Stack

- **Language**: Go (Golang)
- **Framework**: net/http (standard library)
- **API Documentation**: OpenAPI 3.0 (Swagger)
- **Mock Server**: SwaggerHub (for testing)

---

## 📦 Endpoints

### `POST /parcel`
### `POST /quote`

## 🚀 Getting Started

```git clone https://github.com/your-org/itd-hackathon-backend.git
cd itd-hackathon-backend

# Install dependencies (if any)
go mod tidy

# Run the application
go run main.go
The server will start on http://localhost:8080.```
# ITD Hackathon 2025 - AI Shipping Copilot

A modern shipping platform that combines AI-powered quotes and transparent tracking with a clean, intuitive interface.

## 🚀 Project Structure

```
├── frontend/          # Next.js 15 + React 19 + TypeScript
├── backend/           # Go API with Chi router  
├── prd.md            # Product Requirements Document
└── README.md         # This file
```

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15.3.3 with Turbopack
- **Language**: TypeScript + React 19
- **Styling**: Tailwind CSS
- **UI**: Modern responsive design with AI chat interface

### Backend  
- **Language**: Go 1.24
- **Router**: Chi v5 
- **Dependencies**: OpenAI SDK, GoDotEnv
- **Endpoints**: `/quote` and `/parcel` (tracking)

## 🏃‍♂️ Quick Start

### 1. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:3000

### 2. Setup Backend  
```bash
cd backend
go mod tidy
go run main.go
```
Backend runs on: http://localhost:8080

### 3. Full Development (Both Services)
```bash
# Terminal 1 - Backend
cd backend && go run main.go

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

## 📦 Features

### ✅ Quote Generator
- 3-step wizard: Dimensions → Locations → Speed
- Real-time cost breakdown (freight, fuel, duties, VAT)
- Postcode-based shipping calculations
- Multiple speed options (Standard, Express, Overnight)

### ✅ Package Tracking
- Real-time status updates with visual timeline
- Expected delivery estimates
- Detailed shipment history

### ✅ AI Assistant
- Floating chat interface
- Quick question buttons
- Shipping guidance and support

## 🔗 API Integration

The frontend integrates with the Go backend via:

- `POST /quote` - Generate shipping quotes
- `POST /parcel` - Track package status

API client handles real API calls with proper error handling and fallbacks.

## 🌟 UI/UX Highlights

- **Premium Design**: Gradient backgrounds, smooth animations, modern shadows
- **Responsive Layout**: Mobile-first approach with desktop enhancements  
- **Progressive Disclosure**: Step-by-step flows with validation
- **Visual Feedback**: Loading states, hover effects, status indicators

## 📋 Development

### Frontend Commands
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

### Backend Commands
```bash
cd backend
go run main.go       # Start development server
go mod tidy          # Install dependencies
go build             # Build for production
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Docker/Cloud)
```bash
cd backend
go build -o app
# Deploy binary to cloud provider
```

---

**Current Branch**: `dubmmo-development`  
**Live Demo**: Frontend running on localhost:3000  
**API**: Backend running on localhost:8080

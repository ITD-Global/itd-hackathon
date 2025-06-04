# Backend Integration Guide
## AI Shipping Copilot - Frontend to Backend API Integration

### Overview
This document outlines the integration points between the Next.js frontend and the backend APIs for the core features: **Quote Generation** and **Package Tracking**.

---

## 🚀 API Endpoints

### Base URL
```
https://virtserver.swaggerhub.com/itdglobal/itd-hackathon-2025/1
```

---

## 📦 1. Quote Generation API

### Frontend Component: `QuoteGenerator()`
**Location:** `app/page.tsx` (lines 34-460)

### API Endpoint: `POST /quote`

#### Frontend Data Mapping
```javascript
// Frontend Form Data
const formData = {
  weight: "2.5",      // string input → convert to float
  length: "30",       // string input → convert to float
  width: "20",        // string input → convert to float
  height: "15",       // string input → convert to float
  origin: "10001",    // senderPostcode
  destination: "SW1A 1AA", // receiverPostcode
  speed: "standard"   // serviceSpeed: "standard" | "express" | "overnight"
}
```

#### API Request Payload
```json
{
  "weight": 2.5,
  "length": 30.0,
  "height": 15.0,
  "width": 20.0,
  "senderPostcode": "10001",
  "receiverPostcode": "SW1A 1AA",
  "serviceSpeed": "standard"
}
```

#### API Response Expected
```json
{
  "price": 67.50,
  "currency": "GBP"
}
```

#### Frontend Response Handling
```javascript
// Current frontend expects detailed breakdown
// Will need to adapt to simpler API response
const quote = {
  total: response.price.toFixed(2),  // Use API price directly
  baseRate: "45.00",    // Will need to calculate/estimate
  fuel: "6.75",         // Will need to calculate/estimate  
  duties: "5.40",       // Will need to calculate/estimate
  vat: "10.35"          // Will need to calculate/estimate
}
```

---

## 📍 2. Package Tracking API

### Frontend Component: `PackageTracking()`
**Location:** `app/page.tsx` (lines 462-590)

### API Endpoint: `POST /parcel`

#### Frontend Data Mapping
```javascript
// Frontend Input
const trackingNumber = "1Z999AA1234567890"  // User input
```

#### API Request Payload
```json
{
  "trackingId": "1Z999AA1234567890"
}
```

#### API Response Expected
```json
{
  "expected": "2024-12-18T20:00:00Z",
  "history": [
    {
      "status": "Order Placed",
      "time": "2024-12-15T14:30:00Z"
    },
    {
      "status": "Package Picked Up",
      "time": "2024-12-16T09:15:00Z"
    },
    {
      "status": "In Transit",
      "time": "2024-12-17T11:45:00Z"
    }
  ]
}
```

#### Frontend Data Transformation Required
```javascript
// Transform API response to frontend format
const trackingResult = {
  status: getLatestStatus(response.history),           // Derive from history
  location: "Distribution Center - Chicago, IL",       // May need separate endpoint
  estimatedDelivery: formatDateTime(response.expected), // Transform datetime
  timeline: response.history.map(transformHistoryItem)  // Transform array
}
```

---

## 🔧 Integration Points

### 1. API Client Setup
**File:** `app/api/client.ts` (to be created)
```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 
  'https://virtserver.swaggerhub.com/itdglobal/itd-hackathon-2025/1'

export const apiClient = {
  quote: async (data) => { /* implementation */ },
  tracking: async (trackingId) => { /* implementation */ }
}
```

### 2. Error Handling
Both endpoints return standardized error responses:
```json
{
  "error": "INVALID_TRACKING_ID",
  "message": "The provided tracking ID is not valid"
}
```

### 3. Loading States
- Quote generation: 1-2 second expected response time
- Tracking lookup: Sub-second expected response time

---

## 📝 Required Frontend Changes

### Quote Generation Updates
1. **Data Type Conversion**: Convert string inputs to floats
2. **API Integration**: Replace mock calculation with real API call
3. **Response Adaptation**: Handle simplified price response vs detailed breakdown
4. **Error Handling**: Display API error messages to users

### Package Tracking Updates  
1. **Request Format**: Send trackingId in POST body (not query param)
2. **Response Parsing**: Transform datetime formats and history array
3. **Status Derivation**: Calculate current status from history
4. **Error Handling**: Handle 404 (not found) and 400 (invalid) responses

---

## 🚨 Critical Integration Notes

### Service Speed Mapping
Frontend uses: `"standard" | "express" | "overnight"`
Backend expects: Same values ✅

### Postcode Format
Frontend: Flexible string input (e.g., "10001", "SW1A 1AA")
Backend: String field - should handle both formats ✅

### Currency Handling
Frontend: Hardcoded £ symbol
Backend: Returns currency field - should use this dynamically

### Date/Time Formats
Frontend: Human-readable strings ("Dec 15, 2:30 PM")
Backend: ISO 8601 datetime strings - transformation required

---

## 🛠️ Implementation Priority

### Phase 1: Core Integration
1. Set up API client with proper error handling
2. Integrate quote generation with real API
3. Integrate package tracking with real API
4. Update UI to handle API errors gracefully

### Phase 2: Enhanced Features
1. Dynamic currency display based on API response
2. Improved datetime formatting and timezone handling
3. Enhanced error messages and retry logic
4. Loading state optimizations

---

## 📋 Testing Checklist

### Quote Generation
- [ ] All form fields map correctly to API request
- [ ] Price response displays properly in UI
- [ ] Error handling for invalid postcodes
- [ ] Error handling for invalid dimensions
- [ ] Loading states work correctly

### Package Tracking
- [ ] Tracking number sends correctly in request body
- [ ] Response history transforms to timeline format
- [ ] Current status derives correctly from history
- [ ] Error handling for invalid/not found tracking IDs
- [ ] Expected delivery time formats correctly

---

## 🔗 Next Steps for Backend Dev

1. **Validate API Specification**: Confirm the OpenAPI spec matches actual implementation
2. **Test Endpoints**: Ensure both endpoints are accessible and return expected data
3. **Error Scenarios**: Verify error responses match specification
4. **CORS Configuration**: Enable frontend domain for API access
5. **Rate Limiting**: Consider implementing if needed for production

---

## 📞 Integration Support

For questions about frontend implementation details:
- Review `QuoteGenerator()` function (lines 34-460 in app/page.tsx)
- Review `PackageTracking()` function (lines 462-590 in app/page.tsx)
- Check existing data structures and state management

This document should provide everything needed for seamless backend integration! 🚀 
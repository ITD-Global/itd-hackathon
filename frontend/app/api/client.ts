// API Client for Backend Integration
// Integrates with ITD Hackathon Backend APIs

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

// Type definitions matching API specification
export interface QuoteRequest {
  weight: number;
  length: number;
  height: number;
  width: number;
  senderPostcode: string;
  receiverPostcode: string;
  serviceSpeed: 'standard' | 'express' | 'overnight';
}

export interface QuoteResponse {
  price: number;
  currency: string;
}

export interface TrackingRequest {
  trackingId: string;
}

export interface ParcelStatusResponse {
  expected: string; // ISO 8601 datetime
  history: Array<{
    status: string;
    time: string; // ISO 8601 datetime
  }>;
}

export interface ErrorResponse {
  error: string;
  message: string;
}

// API Client
export class APIError extends Error {
  constructor(
    public status: number,
    public error: string,
    public message: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

async function apiRequest<T>(
  endpoint: string,
  method: 'GET' | 'POST' = 'POST',
  data?: unknown
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data && method === 'POST') {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new APIError(response.status, errorData.error, errorData.message);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    // Network or other errors
    throw new APIError(500, 'NETWORK_ERROR', 'Failed to connect to the server');
  }
}

export const apiClient = {
  // Quote Generation API
  async getQuote(request: QuoteRequest): Promise<QuoteResponse> {
    return apiRequest<QuoteResponse>('/quote', 'POST', request);
  },

  // Package Tracking API
  async getTracking(trackingId: string): Promise<ParcelStatusResponse> {
    return apiRequest<ParcelStatusResponse>('/parcel', 'POST', { trackingId });
  }
};

// Utility functions for data transformation
export function formatDateTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function getLatestStatus(history: Array<{ status: string; time: string }>): string {
  if (history.length === 0) return 'Unknown';
  
  // Sort by time and get the latest status
  const sorted = history.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  return sorted[0].status;
}

export function transformTrackingHistory(history: Array<{ status: string; time: string }>) {
  return history.map(item => ({
    status: item.status,
    date: formatDateTime(item.time),
    completed: true // All items in history are completed
  }));
}

// Currency symbol mapping
export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    'GBP': '£',
    'USD': '$',
    'EUR': '€',
  };
  return symbols[currency] || currency;
} 
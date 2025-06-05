"use client";

import { useState } from "react";
import { apiClient, APIError, QuoteRequest, getCurrencySymbol } from "./api/client";

// Type definitions
type QuoteResult = {
  prices: Price[];
  estimatedAt: string; // ISO date string format
  currency?: string;
};

type Price = {
  amount: number;
  charge: string;
};

interface TrackingEvent {
  status: string;
  date: string;
  completed: boolean;
}

interface TrackingResult {
  status: string;
  location: string;
  estimatedDelivery: string;
  timeline: TrackingEvent[];
  isError?: boolean; // Added optional isError property
}

// Enhanced Quote Generator Component with 4-step UX
function QuoteGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weight: "",
    length: "",
    width: "",
    height: "",
    origin: "",
    destination: "",
    speed: "standard"
  });
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleGetQuote = async () => {
    setLoading(true);
    setError("");
    
    try {
      // Prepare API request data
      const quoteRequest: QuoteRequest = {
        weight: parseFloat(formData.weight),
        length: parseFloat(formData.length),
        height: parseFloat(formData.height),
        width: parseFloat(formData.width),
        senderPostcode: formData.origin,
        receiverPostcode: formData.destination,
        serviceSpeed: formData.speed as 'standard' | 'express' | 'overnight'
      };

      // Call real API
      const response = await apiClient.getQuote(quoteRequest);

      console.log(response);
      
      // Transform API response to frontend format
      // Since API only returns total price, we'll estimate breakdown
      //const totalPrice = response.prices.reduce((sum, price) => sum + price.amount, 0);
      
      setQuote(response);
      
      setStep(4); // Move to summary step
    } catch (err) {
      if (err instanceof APIError) {
        setError(`Quote Error: ${err.message}`);
      } else {
        setError("Failed to get quote. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNewQuote = () => {
    setQuote(null);
    setStep(1);
    setFormData({
      weight: "",
      length: "",
      width: "",
      height: "",
      origin: "",
      destination: "",
      speed: "standard"
    });
  };

  const isStepValid = () => {
    if (step === 1) return formData.weight && formData.length && formData.width && formData.height;
    if (step === 2) return formData.origin && formData.destination;
    if (step === 3) return true;
    return true;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Shipping Quote</h3>
        <p className="text-gray-600 mb-6">4-step process: Dimensions → Locations → Speed → Summary</p>
        
        {/* Progress indicator - Updated for 4 steps */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {i}
                </div>
                {i < 4 && <div className={`w-12 h-0.5 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Step description with improved styling */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl text-sm font-medium shadow-md">
            <div className="w-2 h-2 bg-white rounded-full mr-3 opacity-80"></div>
            {step === 1 && "Tell us about your package dimensions"}
            {step === 2 && "Where are you shipping from and to?"}
            {step === 3 && "Choose your shipping speed"}
            {step === 4 && "Review your shipping quote"}
          </div>
        </div>
      </div>

      {/* Step 1: Package Details */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Weight (kg)</label>
              <input
                type="number"
                placeholder="2.5"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={formData.weight}
                onChange={(e) => setFormData({...formData, weight: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Length (cm)</label>
              <input
                type="number"
                placeholder="30"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={formData.length}
                onChange={(e) => setFormData({...formData, length: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Width (cm)</label>
              <input
                type="number"
                placeholder="20"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={formData.width}
                onChange={(e) => setFormData({...formData, width: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Height (cm)</label>
              <input
                type="number"
                placeholder="15"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={formData.height}
                onChange={(e) => setFormData({...formData, height: e.target.value})}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Origin and Destination */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Ship from (Postcode)</label>
            <input
              type="text"
              placeholder="10001"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value={formData.origin}
              onChange={(e) => setFormData({...formData, origin: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Ship to (Postcode)</label>
            <input
              type="text"
              placeholder="SW1A 1AA"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value={formData.destination}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
            />
          </div>
        </div>
      )}

      {/* Step 3: Shipping Speed */}
      {step === 3 && (
        <div className="space-y-4">
          {[
            { value: "standard", name: "Standard", time: "5-7 business days", price: "Most affordable", icon: "🚛" },
            { value: "express", name: "Express", time: "2-3 business days", price: "Balanced option", icon: "✈️" },
            { value: "overnight", name: "Overnight", time: "Next business day", price: "Fastest delivery", icon: "⚡" }
          ].map((option) => (
            <label key={option.value} className="block">
              <input
                type="radio"
                name="speed"
                value={option.value}
                checked={formData.speed === option.value}
                onChange={(e) => setFormData({...formData, speed: e.target.value})}
                className="sr-only"
              />
              <div className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                formData.speed === option.value 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{option.name}</div>
                      <div className="text-sm text-gray-700">{option.time}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">{option.price}</div>
                </div>
              </div>
            </label>
          ))}
        </div>
      )}

      {/* Step 4: Shipping Summary */}
      {step === 4 && quote && (
        <div className="text-center">
          {/* Enhanced Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Summary</h3>
          </div>
          
          {/* Enhanced Summary Layout */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-4">
              {getCurrencySymbol(quote.currency ?? "GBP")}{quote.prices.reduce((sum, price) => sum + price.amount, 0).toFixed(2)}
            </div>
            <div className="flex items-center justify-center space-x-6 text-gray-700 mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">🕒 ETA:</span>
                <span className="text-sm bg-white px-3 py-1 rounded-full border font-semibold">
                  {new Date(quote.estimatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">From/To:</span>
                <span className="text-sm bg-white px-3 py-1 rounded-full border">
                  {formData.origin} → {formData.destination}
                </span>
              </div>
            </div>
          </div>

          {/* Cost Breakdown Table - Improved Alignment */}
          <div className="max-w-md mx-auto mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 text-left">Cost Breakdown:</h4>
            <div className="bg-gray-50 rounded-xl p-4">
              
            <table className="w-full">
  <tbody>
    {quote.prices.map((price, index) => (
      <tr key={index} className="border-b border-gray-200 last:border-b-0">
        <td className="py-2 text-left text-gray-700">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            {price.charge}
          </span>
        </td>
        <td className="py-2 text-right font-medium text-gray-900">
          {getCurrencySymbol(quote.currency ?? "GBP")}{price.amount.toFixed(2)}
        </td>
      </tr>
    ))}
    {/* ✅ Fixed Total Row placement */}
    <tr className="border-t-2 border-gray-300">
      <td className="py-3 text-left font-semibold text-gray-900">Total Cost</td>
      <td className="py-3 text-right font-bold text-lg text-gray-900">
        {getCurrencySymbol(quote.currency ?? "GBP")}{quote.prices.reduce((sum, price) => sum + price.amount, 0).toFixed(2)}
      </td>
    </tr>
  </tbody>
</table>
            </div>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <div className="text-red-500 mr-3">⚠️</div>
            <div className="text-red-700 text-sm">{error}</div>
          </div>
        </div>
      )}

      {/* Navigation buttons - Updated for 4-step flow */}
      <div className="flex justify-between mt-8">
        {step > 1 ? (
          <button
            onClick={handleBack}
            className="px-6 py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>
        ) : (
          <div></div>
        )}
        
        {step < 3 ? (
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Continue →
          </button>
        ) : step === 3 ? (
          <button
            onClick={handleGetQuote}
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Calculating..." : "Get Quote →"}
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleNewQuote}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-200"
            >
              ← New Quote
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Book Shipment →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Full-width Package Tracking Component
function PackageTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setLoading(true);
    setError("");
    setTrackingResult(null);

    try {
      // Fetch data
      const response = await apiClient.getTracking(trackingNumber);
      const { history, expected } = response;

      if (!history || history.length === 0) {
        setError("No tracking history available.");
        return;
      }

      const latestEvent = history[history.length - 1];
      const isDelivered = latestEvent.status === "Parcel delivered";
      const isUnknown = latestEvent.status === "Barcode not found";

      const timeline = history.map(event => ({
        status: event.status,
        date: new Date(event.time).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        completed: true
      }));

      if (!isDelivered && !isUnknown) {
        timeline.push({
          status: "Delivered",
          date: new Date(expected).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          }) + ", Expected",
          completed: false
        });
      }

      setTrackingResult({
        status: latestEvent.status,
        location: (() => {
          if (isUnknown) return "Unknown";
          if (!isDelivered) return "📍 In Transit";
          return "";
        })(),
        estimatedDelivery: isUnknown
          ? "No estimated delivery available"
          : isDelivered ? "" : new Date(expected).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            }),
        timeline,
        isError: isUnknown
      });
    } catch (err) {
      setError("Failed to track package. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📍</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Track Your Package</h3>
        <p className="text-gray-700">Enter your tracking number to see real-time updates</p>
      </div>

      <form onSubmit={handleTrack} className="mb-6">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="SNC987654321"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading || !trackingNumber.trim()}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "..." : "Track"}
          </button>
        </div>
      </form>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <div className="text-red-500 mr-3">⚠️</div>
            <div className="text-red-700 text-sm">{error}</div>
          </div>
        </div>
      )}

{/* Tracking Info Display */}
{trackingResult && (
  <div className="flex justify-center">
    <div className="w-full max-w-4xl">
      <div className={`text-center p-6 rounded-xl mb-8 ${trackingResult.isError ? 'bg-red-100' : 'bg-green-50'}`}>
        <div className={`text-2xl font-bold mb-1 ${trackingResult.isError ? 'text-red-600' : 'text-green-600'}`}>
          {trackingResult.status}
        </div>
        <p className={`${trackingResult.isError ? 'text-red-800' : 'text-green-800'} mb-2`}>
          {trackingResult.location}
        </p>
        {trackingResult.estimatedDelivery && (
          <p className="text-sm text-green-700">
            Expected: {trackingResult.estimatedDelivery}
          </p>
        )}
      </div>

      <div
        className={`grid justify-center gap-4 ${
          trackingResult.timeline.length === 1
            ? 'grid-cols-1'
            : trackingResult.timeline.length === 2
            ? 'grid-cols-2'
            : trackingResult.timeline.length === 3
            ? 'grid-cols-3'
            : 'grid-cols-1 md:grid-cols-4'
        }`}
      >
        {trackingResult.timeline.map((event, index) => (
          <div key={"charge-" + index} className="text-center relative">
            <div className={`w-4 h-4 rounded-full mx-auto mb-3 relative z-10 ${event.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
            {index < trackingResult.timeline.length - 1 && (
              <div className="hidden md:block absolute top-2 left-1/2 w-full h-0.5 border-t-2 border-dotted border-gray-300 transform translate-x-2 -translate-y-1/2" />
            )}
            <div className={`font-medium text-sm mb-1 ${event.completed ? 'text-gray-900' : 'text-gray-600'}`}>
              {event.status}
            </div>
            <div className={`text-xs ${event.completed ? 'text-gray-700' : 'text-gray-500'}`}>
              {event.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


    </div>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Simplified Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">📦</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI Shipping Copilot</h1>
                <p className="text-sm text-gray-700">Transparent shipping made simple</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Features */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <div className="space-y-16">
          {/* Quote Generator - Full Width */}
          <section>
            <QuoteGenerator />
          </section>

          {/* Package Tracking - Full Width */}
          <section>
            <PackageTracking />
          </section>
        </div>
      </main>
    </div>
  );
}

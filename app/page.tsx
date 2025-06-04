"use client";

import { useState } from "react";

// Type definitions
interface QuoteResult {
  baseRate: string;
  fuel: string;
  duties: string;
  vat: string;
  total: string;
  estimatedDays?: number;
}

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
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Enhanced Quote Generator Component with better UX
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

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const baseRate = Math.random() * 50 + 20;
      const fuel = baseRate * 0.15;
      const duties = baseRate * 0.12;
      const vat = (baseRate + duties) * 0.20;
      const total = baseRate + fuel + duties + vat;
      
      setQuote({
        baseRate: baseRate.toFixed(2),
        fuel: fuel.toFixed(2),
        duties: duties.toFixed(2),
        vat: vat.toFixed(2),
        total: total.toFixed(2)
      });
      setLoading(false);
    }, 1500);
  };

  const isStepValid = () => {
    if (step === 1) return formData.weight && formData.length && formData.width && formData.height;
    if (step === 2) return formData.origin && formData.destination;
    return true;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
      {!quote && (
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Shipping Quote</h3>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i}
                  </div>
                  {i < 3 && <div className={`w-12 h-0.5 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />}
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
            </div>
          </div>
        </div>
      )}

      {!quote ? (
        <>
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

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-6 py-3 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-900 transition-colors"
            >
              ← Back
            </button>
            {step < 3 ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Calculating..." : "Get Quote"}
              </button>
            )}
          </div>
        </>
      ) : (
        /* Quote Results - New Format */
        <div className="text-center">
          <div className="text-4xl mb-6">📦</div>
          
          {/* Summary Line - Improved Format */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-3">
              Total: £{quote.total} | ETA: {quote.estimatedDays || 2} working days
            </div>
            <div className="flex items-center justify-center text-gray-700">
              <span className="text-sm bg-white px-3 py-1 rounded-full border">
                📍 {formData.origin} → {formData.destination}
              </span>
            </div>
          </div>

          {/* Breakdown */}
          <div className="max-w-md mx-auto text-left mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">Breakdown:</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Freight
                </span>
                <span className="font-medium text-gray-900">£{quote.baseRate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Fuel
                </span>
                <span className="font-medium text-gray-900">£{quote.fuel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Remote area
                </span>
                <span className="font-medium text-gray-900">£{quote.duties}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Dim-weight adj
                </span>
                <span className="font-medium text-gray-900">£{quote.vat}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {setQuote(null); setStep(1);}}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-xl hover:bg-gray-50 transition-colors"
            >
              New Quote
            </button>
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
              Book Shipment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Full-width Package Tracking Component
function PackageTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      setTrackingResult({
        status: "In Transit",
        location: "Distribution Center - Chicago, IL",
        estimatedDelivery: "Tomorrow by 8:00 PM",
        timeline: [
          { status: "Order Placed", date: "Dec 15, 2:30 PM", completed: true },
          { status: "Package Picked Up", date: "Dec 16, 9:15 AM", completed: true },
          { status: "In Transit", date: "Dec 17, 11:45 AM", completed: true },
          { status: "Delivered", date: "Dec 18, Expected", completed: false }
        ]
      });
      setLoading(false);
    }, 1000);
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
            placeholder="1Z999AA1234567890"
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

      {trackingResult && (
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-6 bg-green-50 rounded-xl mb-8">
            <div className="text-2xl font-bold text-green-600 mb-1">{trackingResult.status}</div>
            <p className="text-green-800 mb-2">📍 {trackingResult.location}</p>
            <p className="text-sm text-green-700">Expected: {trackingResult.estimatedDelivery}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {trackingResult.timeline.map((event, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-4 h-4 rounded-full mx-auto mb-3 relative z-10 ${event.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                {/* Dotted line connecting to next step */}
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
      )}
    </div>
  );
}

// Floating AI Chat Bubble
function FloatingChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hi! I'm here to help with shipping questions. Ask me about costs, duties, VAT, or tracking!" }
  ]);

  const quickQuestions = [
    "How do you calculate duties?",
    "What's included in shipping costs?",
    "How accurate are your quotes?",
    "Which carriers do you support?"
  ];

  const handleSend = (question?: string) => {
    const userMessage = question || message;
    if (!userMessage.trim()) return;

    setMessage("");
    setChat(prev => [...prev, { role: "user", content: userMessage }]);

    setTimeout(() => {
      let response = "";
      if (userMessage.toLowerCase().includes("duty") || userMessage.toLowerCase().includes("tax")) {
        response = "Duties and taxes are calculated based on your package value and destination country. For example, UK has 20% VAT on items over £15. I can help calculate exact amounts with your details!";
      } else if (userMessage.toLowerCase().includes("track")) {
        response = "I can help you track packages from any major carrier! Use the tracking tool above, or share your tracking number and I'll look it up.";
      } else if (userMessage.toLowerCase().includes("cost") || userMessage.toLowerCase().includes("accurate")) {
        response = "Our quotes include all costs - base shipping, fuel surcharges, duties, and VAT. They're typically within 5% of final costs, with no hidden fees!";
      } else if (userMessage.toLowerCase().includes("carrier")) {
        response = "We support all major carriers: UPS, FedEx, DHL, USPS, and many regional ones. Just enter any tracking number and we'll detect the carrier automatically.";
      } else {
        response = "I'm here to help with any shipping questions! Feel free to ask about costs, tracking, duties, VAT, delivery times, or anything else shipping-related.";
      }
      
      setChat(prev => [...prev, { role: "assistant", content: response }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 h-96 flex flex-col animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <div className="text-xl">🤖</div>
              <div>
                <h4 className="font-semibold text-white">AI Assistant</h4>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Quick Questions */}
          <div className="p-3 border-b border-gray-100">
            <p className="text-xs font-medium text-gray-600 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1">
              {quickQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(q)}
                  className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {chat.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={() => handleSend()}
                className="px-3 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <div className="text-xl">💬</div>
        )}
      </button>
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

      {/* Floating Chat Bubble */}
      <FloatingChatBubble />
    </div>
  );
}

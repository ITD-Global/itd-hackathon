"use client";

import { useState } from "react";

// Type definitions
interface QuoteResult {
  baseRate: string;
  fuel: string;
  duties: string;
  vat: string;
  total: string;
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
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
      {!quote ? (
        <>
          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
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

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Shipping Quote</h3>
            <p className="text-gray-700">
              {step === 1 && "Tell us about your package dimensions"}
              {step === 2 && "Where are you shipping from and to?"}
              {step === 3 && "Choose your shipping speed"}
            </p>
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
                <label className="block text-sm font-medium text-gray-800 mb-2">Ship from</label>
                <input
                  type="text"
                  placeholder="New York, United States"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  value={formData.origin}
                  onChange={(e) => setFormData({...formData, origin: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Ship to</label>
                <input
                  type="text"
                  placeholder="London, United Kingdom"
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
        /* Quote Results */
        <div className="text-center">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Shipping Quote</h3>
          <p className="text-gray-700 mb-8">From {formData.origin} to {formData.destination}</p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">£{quote.total}</div>
            <p className="text-gray-700">Total cost including all fees</p>
          </div>

          <div className="space-y-3 text-left mb-8">
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Base shipping</span>
              <span className="font-medium text-gray-900">£{quote.baseRate}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Fuel surcharge</span>
              <span className="font-medium text-gray-900">£{quote.fuel}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Import duties</span>
              <span className="font-medium text-gray-900">£{quote.duties}</span>
            </div>
            <div className="flex justify-between py-2 border-t pt-3">
              <span className="text-gray-700">VAT (20%)</span>
              <span className="font-medium text-gray-900">£{quote.vat}</span>
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

// Simplified Package Tracking Component
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
          { status: "Out for Delivery", date: "Dec 18, Expected", completed: false },
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
        <div className="flex gap-3">
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
        <div className="space-y-6">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600 mb-1">{trackingResult.status}</div>
            <p className="text-green-800 mb-2">📍 {trackingResult.location}</p>
            <p className="text-sm text-green-700">Expected: {trackingResult.estimatedDelivery}</p>
          </div>
          
          <div className="space-y-4">
            {trackingResult.timeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-4 h-4 rounded-full mt-1 ${event.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                <div className="flex-1">
                  <div className={`font-medium ${event.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                    {event.status}
                  </div>
                  <div className={`text-sm ${event.completed ? 'text-gray-700' : 'text-gray-500'}`}>
                    {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Streamlined AI Assistant
function AIAssistant() {
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
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">🤖</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Shipping Assistant</h3>
        <p className="text-gray-700">Get instant answers to your shipping questions</p>
      </div>

      {/* Quick questions */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-800 mb-3">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => handleSend(q)}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 overflow-y-auto mb-6 space-y-4 border rounded-xl p-4 bg-gray-50">
        {chat.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-800 shadow-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Ask about shipping costs, duties, tracking..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={() => handleSend()}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Simplified Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Shipping costs,<br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            crystal clear
          </span>
        </h2>
        <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-12 leading-relaxed">
          Get instant quotes with complete cost breakdowns, track packages in real-time, 
          and understand exactly what you'll pay—no surprises, no hidden fees.
        </p>
      </section>

      {/* Main Features */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <div className="space-y-16">
          {/* Quote Generator */}
          <section>
            <QuoteGenerator />
          </section>

          {/* Secondary Features */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PackageTracking />
            <AIAssistant />
          </section>
        </div>
      </main>
    </div>
  );
}

# AI Shipping Copilot - Product Requirements Document

## Project Overview

**Product Name:** AI Shipping Copilot  
**Tagline:** Transparent shipping made simple  
**Project Type:** Hackathon MVP - Full-Stack Web Application  
**Development Status:** Implemented with core features complete

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (React-based)
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS for responsive UI
- **UI Components:** Custom component library with modern design
- **State Management:** React hooks (useState) for local state

### Backend & Infrastructure  
- **Runtime:** Node.js with Next.js API routes
- **Deployment:** Vercel-optimized for serverless functions
- **Version Control:** Git with GitHub integration

### Development Tools
- **Package Manager:** npm
- **Development Server:** Next.js dev server with hot reload
- **Code Quality:** TypeScript strict mode for error prevention

## Problem Statement

Customers struggle with shipping complexity, needing to juggle multiple tools for quotes, tracking packages, and understanding additional costs like duties and VAT. Current solutions are fragmented, requiring users to visit different platforms and manually calculate costs.

## Solution Vision

A unified AI-powered shipping assistant that provides instant quotes with full cost breakdowns, real-time package tracking with intelligent updates, and clear explanations of duties and VAT charges - all accessible through simple, conversational interactions via a floating chat interface.

## Core Features (Implemented)

### 1. Multi-Step Quote Generator ✅
**Current Implementation:**
- **3-step wizard interface** with visual progress indicators
- **Step 1:** Package dimensions (weight in kg, length/width/height in cm)
- **Step 2:** Postcode-based addressing system for precise location targeting
  - Origin postcode input (e.g., "10001, United States")
  - Destination postcode input (e.g., "SW1A 1AA, United Kingdom")
- **Step 3:** Shipping speed selection (Standard, Express, Overnight)
- **Instant quote calculation** with complete £ cost breakdown
- **Real-time form validation** and step progression
- **Responsive design** working across all device sizes

**Cost Breakdown Display:**
- Base shipping rate in £
- Fuel surcharge (15% of base rate)
- Import duties (12% of base rate)
- VAT (20% on base + duties for UK)
- **Total cost clearly displayed** with no hidden fees

**User Experience:**
- Clean, modern interface with step-by-step guidance
- Smart form validation preventing progression without required fields
- Visual shipping option selection with icons and descriptions
- One-click quote generation with loading states

### 2. Full-Width Package Tracking ✅
**Current Implementation:**
- **Unified tracking interface** matching quote generator width
- Universal tracking number input supporting all major carriers
- **Real-time status simulation** with 5-stage delivery timeline
- **Visual progress tracking** with completed/pending status indicators
- **Responsive grid layout** (1 column mobile, 5 columns desktop)

**Tracking Features:**
- Current status display (In Transit, Out for Delivery, etc.)
- Current location with specific facility information
- Estimated delivery timeframe
- **Interactive timeline** showing package journey milestones
- Status indicators with color-coded completion states

### 3. Floating AI Chat Assistant ✅
**Current Implementation:**
- **Bottom-right floating chat bubble** with modern design
- **Slide-in animation** when opened (320px × 384px chat window)
- **Gradient header** with online status indicator
- **Quick question buttons** for instant assistance
- **Contextual AI responses** for shipping-related queries

**AI Capabilities:**
- Duty and tax calculation explanations
- Shipping cost breakdowns and transparency
- Tracking assistance and carrier support information
- VAT calculation specifics (20% on items over £15)
- **Smart response system** based on keyword detection

**Chat Interface:**
- Modern bubble-style message layout
- User messages (blue, right-aligned) vs AI responses (gray, left-aligned)
- Real-time typing indicators and response delays
- Persistent chat history during session
- **Mobile-optimized** responsive design

## Current User Journey Flows

### Quote Generation Flow ✅
1. **Hero section** with clear value proposition and modern gradient design
2. **Step 1:** Package dimensions input with 2×2 grid layout
3. **Step 2:** Postcode-based origin/destination input
4. **Step 3:** Visual shipping speed selection with icons
5. **Quote results** with detailed cost breakdown in £
6. **Action buttons** for new quote or booking shipment

### Package Tracking Flow ✅  
1. **Full-width tracking section** with prominent input field
2. **Instant tracking simulation** with 1-second loading state
3. **Status card** with green success styling and location info
4. **5-stage timeline** with visual progress indicators
5. **Responsive timeline** adapting to screen size

### AI Assistant Interaction ✅
1. **Floating bubble** accessible from any page location
2. **Chat window** opens with welcome message and quick questions
3. **Natural conversation** with context-aware responses
4. **Quick resolution** for common shipping questions
5. **Persistent availability** throughout user session

## Postcode-Based Addressing System

### Implementation Details
**Input Format:**
- Origin: "Postcode, Country" (e.g., "10001, United States")
- Destination: "Postcode, Country" (e.g., "SW1A 1AA, United Kingdom")

**Benefits:**
- **More precise** location targeting than city names
- **Standardized format** across international locations
- **Better quote accuracy** for zone-based shipping
- **Reduced ambiguity** (no confusion between cities with same names)
- **Integration ready** for postal service APIs

**User Experience:**
- Clear placeholder examples showing format
- Large, accessible input fields with proper styling
- Smart validation preventing empty submissions
- Consistent with shipping industry standards

## Design Implementation

### Visual Design ✅
- **Modern gradient backgrounds** (blue-50 to indigo-50)
- **Glass morphism effects** with backdrop blur on header
- **Rounded corners** (rounded-2xl) for modern feel
- **Shadow system** (shadow-xl) for depth and hierarchy
- **Responsive typography** with proper contrast ratios

### Component Library ✅
- **Consistent spacing** using Tailwind's spacing scale
- **Reusable color palette** (blue-600, gray-900, etc.)
- **Standardized interactions** with hover and focus states
- **Loading states** with disabled button styling
- **Form components** with proper accessibility

### Mobile-First Design ✅
- **Responsive grid systems** adapting to screen size
- **Touch-friendly buttons** with adequate sizing
- **Readable typography** at all viewport sizes
- **Optimized spacing** for mobile interactions

## Success Metrics (Implemented)

### User Experience Metrics
- **Quote completion rate** through 3-step wizard
- **Form validation effectiveness** preventing errors
- **Chat engagement** with AI assistant
- **Mobile responsiveness** across device types

### Technical Performance
- **Fast loading times** with Next.js optimization
- **Smooth animations** with CSS transitions
- **TypeScript safety** preventing runtime errors
- **Component reusability** for maintainable code

## Future Enhancements

### Phase 2 Features
- **Real carrier API integration** replacing simulation
- **User authentication** for saved quotes and tracking
- **Email notifications** for tracking updates
- **Advanced postcode validation** with real-time verification
- **Multi-currency support** beyond £ (GBP)

### Technical Improvements
- **Database integration** for persistent data
- **API rate limiting** for production scaling
- **Advanced error handling** with user-friendly messages
- **Performance monitoring** and analytics
- **SEO optimization** for better discoverability

## Development Notes

### Current Status
- ✅ **Core MVP complete** with all primary features
- ✅ **Responsive design** working across devices  
- ✅ **TypeScript implementation** for type safety
- ✅ **Modern UI/UX** with professional styling
- ✅ **Git version control** with GitHub integration

### Next Steps
1. **Real API integration** for live shipping quotes
2. **Postcode validation service** integration
3. **User authentication** and account management
4. **Database setup** for data persistence
5. **Production deployment** optimization
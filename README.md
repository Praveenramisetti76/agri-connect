AgriConnect
AgriConnect is a comprehensive digital marketplace platform designed to connect farmers directly with buyers, eliminating middlemen and ensuring fair prices for agricultural products.

Key Innovation: Voice-Based Intelligent Assistant
AgriConnect's voice-based chatbot is a groundbreaking feature that revolutionizes how farmers interact with technology:

Speech-to-Text & Text-to-Speech: Allows farmers with limited literacy to use voice commands in their native language
Role-Based Intelligence: Automatically detects whether you're a farmer or buyer and adapts functionality accordingly
Multilingual Support: Operates in English, Hindi, and Telugu to serve diverse rural communities
Function-Rich Interface: Performs complex tasks like product management and order tracking through simple voice instructions
This technology bridges the digital divide for rural farmers who may have limited literacy or technical skills, making advanced e-commerce accessible to all.

Project Overview
AgriConnect aims to revolutionize the agricultural supply chain by:

Providing farmers with a direct channel to sell their products
Enabling buyers to source fresh, local produce directly from farmers
Supporting sustainable and organic farming practices
Offering educational resources about organic farming methods
Facilitating transparent and efficient ordering and delivery processes
Empowering users through voice-command technology to overcome literacy and technical barriers
Features
Voice Assistant Capabilities
For Farmers
Add Products: "I want to sell 50 kg of organic tomatoes for 40 rupees per kg"
Update Products: "Change the price of my tomatoes to 45 rupees" (work in progress)
Check Orders: "Show me all my pending orders" or "What orders came in today?"(work in progress)
Get Farming Tips: "How do I deal with aphids on my tomato plants?"
Weather Forecasts: "What's the weather forecast for Hyderabad for the next 3 days?"(work in progress)
For Buyers- (work in progress)
Search Products: "Find organic vegetables under 50 rupees per kg"
Place Orders: "I want to order 10 kg of those tomatoes"
Track Orders: "What's the status of my order number 12345?"
Get Product Information: "Tell me more about the organic farming methods used"
Platform Features
For Farmers
Complete product management (add, edit, delete)
Order fulfillment workflow
Profile management
Sales analytics dashboard
For Buyers
Browse marketplace products
View detailed product information
Place and track orders
Manage profile and preferences
For Administrators
User management and verification
Content moderation
System monitoring
Analytics dashboard
General Features
Multilingual interface (English, Hindi, Telugu)
Secure authentication and authorization
Responsive design for mobile, tablet and desktop
Image upload for products with cloud storage
Transparent pricing and transaction history
Technical Implementation
Voice Assistant Architecture
Speech-to-Text: Powered by AssemblyAI for accurate transcription in multiple languages
Natural Language Processing: OpenAI GPT models for understanding user intent and context
Function Calling: Structured actions mapped to platform functionality
Text-to-Speech: ElevenLabs voices for natural-sounding responses
Tech Stack
Frontend
React.js with Redux for state management
React Router for navigation
Tailwind CSS for responsive design
i18next for internationalization
OpenAI API integration for intelligent chatbot
Web Speech API and third-party voice services
Backend
Node.js with Express
MongoDB for database
Mongoose ORM
JWT for authentication
Multer for file uploads
Cloudinary for image storage
Getting Started
Prerequisites
Node.js (v14.0.0 or higher)
npm or yarn
MongoDB instance
API keys for OpenAI, AssemblyAI, and ElevenLabs
Installation
Clone the repository
git clone https://github.com/yourusername/agri-connect.git
cd agri-connect
Install dependencies for the root, client, and server
npm install
cd client && npm install
cd ../server && npm install
Create .env file in the server directory with the following variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Create .env file in the client directory with the following variables:
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_ASSEMBLYAI_API_KEY=your_assemblyai_api_key
REACT_APP_ELEVENLABS_API_KEY=your_elevenlabs_api_key
Running the Application
Development Mode
Start the server:
cd server
npm run dev
Start the client (in a new terminal):
cd client
npm start
Production Mode
Build the client:
cd client
npm run build
Start the server:
cd server
npm start
Project Structure
agri-connect/
├── client/                # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source code
│       ├── actions/       # Redux actions
│       ├── components/    # React components
│       ├── pages/         # Page components
│       ├── reducers/      # Redux reducers
│       ├── store/         # Redux store configuration
│       ├── translations/  # i18n translation files
│       └── utils/         # Utility functions
├── server/                # Backend Node.js/Express application
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   ├── uploads/           # Uploaded files
│   └── utils/             # Utility functions

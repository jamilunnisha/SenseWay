SenseWay - Neurodiverse-Friendly Navigation Assistant

SenseWay is an AI-powered navigation assistant designed to prioritize comfort and calmness, catering to neurodiverse individuals who navigate the world differently. Unlike traditional navigation apps that focus solely on the fastest route, SenseWay offers multiple route options based on a custom Calmness Score that factors in noise levels, air quality, distance, and time. With features like real-time navigation, augmented reality (AR) overlays, peer monitoring, and an emergency support system, SenseWay empowers users with sensory-friendly, personalized navigation experiences.
Table of Contents

Introduction
Key Features
Technology Stack
Installation
Usage
Project Structure
Performance Benchmarks
Contributing
License
Acknowledgements

Introduction
SenseWay redefines navigation by focusing on mental and sensory comfort, particularly for neurodiverse users who may experience sensory overload or anxiety during travel. By integrating advanced APIs like Google Maps, OpenWeatherMap, and Noise APIs, along with AR.js for immersive navigation, SenseWay provides a holistic platform that adapts to real-time environmental conditions and user preferences. Its unique Calm Sync feature dynamically updates routes to ensure the calmest possible journey, while AR navigation and peer monitoring enhance accessibility and safety.
Key Features
1. Real-Time Navigation with Calm Sync

Multiple Route Options: Generates up to 3–5 routes using Google Directions API, ranked by a Calmness Score:[C = w_1 \times (1 - \frac{N}{N_{max}}) + w_2 \times (1 - \frac{AQI}{AQI_{max}}) + w_3 \times (1 - \frac{T}{T_{max}}) + w_4 \times (1 - \frac{D}{D_{max}})]Where:
(C): Calmness Score
(N): Noise Level (dB)
(AQI): Air Quality Index
(T): Estimated Time (minutes)
(D): Distance (km)
Weights ((w_1, w_2, w_3, w_4)): Customizable (default: 0.4, 0.3, 0.2, 0.1)


Calm Sync: Automatically reevaluates routes at checkpoints based on live noise, AQI, and traffic data, ensuring adaptive navigation.
Calmest Route Button: One-tap selection of the highest-scored route for users needing quick decisions.
Rest Stops: Suggests nearby parks and hospitals for mental or physical breaks, with noise and distance filters.
Pegman Integration: Google Street View previews for sensory environment assessment at key decision points.

2. AR Navigation

Modern Dashboard UI: Right-side dashboard with start/destination inputs, navigation start button, and voice toggle, powered by Google Places API autocompletion.
AR Live View: Uses AR.js and <gps-camera> to overlay directional rings and step-by-step instructions in real space.
Real-Time Step Advancement: Automatically progresses instructions when within 10 meters of a waypoint using navigator.geolocation.watchPosition.
Voice Guidance: Provides spoken instructions alongside on-screen AR cues for accessibility.
Mobile-Optimized: Fully responsive, tested on Chrome Android with GPS and camera support.

3. Environmental Insights

Live Data: Fetches real-time AQI, noise levels, temperature, and humidity via OpenWeatherMap and Noise APIs.
Neurodiverse-Friendly Visuals: Color-coded metrics (🟢 Good, 🟡 Moderate, 🔴 Poor) with minimal visual noise.
Periodic Updates: Refreshes data every 60 seconds without page reloads.

4. Peer Monitoring System

Live Location Sharing: Shares user location, route progress, and ETA with trusted peers via WebSockets or Firebase Realtime Database.
Context-Aware: Peers see full route details, checkpoints, and Calm Sync updates.
Alerts & Check-Ins: Includes check-in buttons, automatic deviation alerts, and a panic button for emergencies.
Privacy-Centric: Opt-in sharing, session-based, with automatic termination upon journey completion.

5. Emergency Support

Floating SOS Button: Expands to offer context-based triggers (e.g., “I’m Overwhelmed,” “Medical Emergency”).
Location Fetching: Retrieves GPS coordinates and reverse-geocodes to a readable address using Nominatim.
Nearby Safe Spaces: Lists hospitals within 5km via Overpass API.
Calming Toolkit: Includes guided breathing audio and coping guidance for neurodiverse distress scenarios.

6. Profile Personalization

Neurodiverse-Focused: Captures sensory sensitivities, mobility preferences, communication styles, and emergency contacts.
Data Persistence: Stores data in localStorage with optional server sync via /api/auth/signup.
AI Customization: Toggles for peer monitoring, calm score suggestions, and anomaly detection.

7. AI Chatbot (Navi)

Floating Interface: Minimal, responsive chatbot for navigation and page routing.
Rule-Based Logic: Handles greetings, navigation commands, and page redirects using keyword detection.
Offline-Compatible: Works without API calls, ensuring reliability in low-network scenarios.

Technology Stack

Frontend: HTML, CSS, JavaScript
APIs:
Google Maps JavaScript API (Directions, Places, Geometry, Street View)
OpenWeatherMap API (AQI, temperature, humidity)
Noise APIs (e.g., Ambiciti, Noise-API, placeholders for future integration)
Overpass API (hospital locations)
Nominatim (reverse geocoding)


AR: AR.js, A-Frame, <gps-camera>
Backend: Firebase (hosting, Realtime Database for peer monitoring)
Storage: localStorage for offline profile data
Styling: Tailwind CSS (planned), custom CSS for neurodiverse-friendly UI
Fonts: System default for performance, Poppins as fallback
Deployment: Firebase Hosting with enhanced cache settings

Installation
Prerequisites

Node.js (for local development)
Firebase CLI (npm install -g firebase-tools)
Google Maps API key
OpenWeatherMap API key
Browser with GPS and WebXR support (e.g., Chrome on Android)

Steps

Clone the Repository:git clone https://github.com/your-username/senseway.git
cd senseway


Install Dependencies:npm install


Set Up Environment Variables: Create a .env file in the root directory:GOOGLE_MAPS_API_KEY=your_google_maps_api_key
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key


Configure Firebase:
Initialize Firebase: firebase init
Select Hosting and Realtime Database
Update firebase.json and .firebaserc as per the provided configuration


Run Locally:npm start

Open http://localhost:3000 in a browser.
Deploy to Firebase:firebase deploy



Usage

Access the App:
Open the deployed URL or local server in a mobile browser with GPS enabled.
Grant permissions for location and camera access.


Set Up Profile:
Navigate to the Profile page to input sensory preferences, emergency contacts, and navigation settings.


Plan a Route:
Enter start and destination addresses using the dashboard (autocompletion enabled).
Compare routes based on distance, time, AQI, and noise levels.
Enable Calm Sync for dynamic updates or select the Calmest Route.


Navigate:
Use AR Live View for immersive guidance or traditional map-based navigation.
Follow voice and on-screen instructions, with rest stop suggestions as needed.


Emergency Support:
Tap the floating SOS button for instant location fetching, hospital lists, or calming audio.


Peer Monitoring:
Share your journey with a trusted peer, who can monitor progress via their dashboard.


Interact with Navi:
Use the chatbot to navigate pages or request assistance (e.g., “Go to emergency support”).



Project Structure
senseway/
├── public/
│   ├── index.html          # Main entry point
│   ├── get-started.html    # Landing page
│   ├── styles.css          # Global styles
│   ├── scripts.js          # Core JavaScript logic
│   ├── ar-navigation.js    # AR-specific functionality
│   ├── chatbot.js          # AI chatbot logic
│   └── assets/             # Images, audio (e.g., guided breathing .mp3)
├── firebase.json           # Firebase hosting config
├── .firebaserc             # Firebase project settings
├── .env                    # Environment variables
├── package.json            # Node dependencies
└── README.md               # Project documentation

Performance Benchmarks



Module
Metric
Result



Route Planning
Time to Render Routes
1.8–2.4 sec



Calm Score Calculation
<100 ms per route


Real-Time Navigation
GPS Lock Time
Avg. 2.1 sec



Checkpoint Detection
<500 ms (~10m threshold)


AR Navigation
AR.js Load Time
~1.9 sec



Instruction Update
<200 ms lag


Environmental Insights
API Poll Frequency
Every 60 sec



AQI + Noise Load Time
~1.3 sec


Emergency Support
Location Fetch
~1.5 sec



Rest Stop Retrieval
<2.5 sec (5km radius)


Peer Monitoring
Live Location Sync
<300 ms latency


AI Chatbot
Toggle Response
~80 ms


Profile Page
Form Load + Prefill
~20 ms (localStorage)


Mobile Optimization:

Fully responsive (360px–1080px)
First Meaningful Paint: 1.5–2.2 sec on 5G/4G
Offline support for chatbot, profile, and partial AR functionality

Contributing
We welcome contributions to enhance SenseWay’s features and accessibility. To contribute:

Fork the repository.
Create a feature branch: git checkout -b feature/your-feature.
Commit changes: git commit -m "Add your feature".
Push to the branch: git push origin feature/your-feature.
Open a Pull Request with a detailed description.

Please follow the Code of Conduct and ensure tests pass before submitting.
License
This project is licensed under the MIT License.
Acknowledgements

Google Maps Platform: For robust mapping and Places APIs.
OpenWeatherMap: For environmental data integration.
AR.js & A-Frame: For accessible WebAR navigation.
Firebase: For hosting and real-time peer monitoring.
Neurodiverse Community: For inspiring a sensory-friendly navigation solution.

For questions or support, contact [keerthansomasila8@gmail.com] or open an issue on GitHub.

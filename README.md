# NASA Explorer


NASA Explorer is a web app that lets users explore cool space data using NASA’s public APIs. You can check out the Astronomy Picture of the Day, browse stunning Mars Rover images, and visualize asteroid flybys — all in one place.

What It Does
APOD: View NASA’s daily astronomy photo with its explanation.

Mars Rover: Browse rover images by sol (Martian day) and camera.

NEO Feed: See asteroid data in charts and a detailed table.

Light/Dark Mode: Toggle between clean light and spacey dark themes.

Fully responsive and styled with Bootstrap.

Built With
React (Frontend)

Node.js + Express (Backend)

Chart.js for graphs

Bootstrap for styling

NASA APIs (APOD, Mars Rover, NEO)

How to Run It Locally
Clone this repo:
git clone https://github.com/Abhik8261/NASA_website

Install dependencies:

Frontend:
cd frontend && npm install

Backend:
cd backend && npm install

Add your NASA API key && PORT in backend/.env:

NASA_API_KEY=your_api_key_here
PORT=xyz

Start both servers:

Backend: npm start
Frontend: npm start

Then open http://localhost:3000 in your browser.

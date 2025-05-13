# 🌦️ Weather Dashboard

A dynamic and responsive Weather Dashboard that allows users to search for current weather conditions in any city or region. Built using **React.js** for the frontend and **Node.js** for the backend. The application fetches real-time weather data from the **OpenWeather API**.

---

## 🔧 Tech Stack

- **Frontend:** React.js, HTML, CSS, JavaScript, Axios
- **Backend:** Node.js, Express.js
- **External API:** [OpenWeatherMap](https://openweathermap.org/api)
- **Version Control:** Git & GitHub

---

## ✨ Features

- 🔍 **Search Weather:** Search by city or region
- 🌡️ **Current Conditions:** Displays temperature, humidity, and weather conditions
- 📆 **5-Day Forecast:** Shows weather forecast for the next few days
- 💾 **Save Favorites:** Option to save and quickly access favorite cities *(stored in localStorage)*
weather-dashboard/
├── backend/
│ └── server.js
├── frontend/
│ ├── src/
│ └── public/
├── .env
├── .gitignore
└── README.md

---

### ⚙️ Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/FUTURE_FS_02.git
cd FUTURE_FS_02
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file inside /backend with this content:

ini
Copy
Edit
WEATHER_API_KEY=your_openweather_api_key_here
Start the backend server:

bash
Copy
Edit
node server.js
3. Setup Frontend
In a new terminal:

bash
Copy
Edit
cd frontend
npm install
npm start
🌐 API Used
OpenWeatherMap API

Current Weather

5-Day Forecast

📦 Deployment
To deploy:

Frontend: Deploy on Netlify, Vercel, or GitHub Pages

Backend: Deploy on Render, Railway, or any Node-friendly platform

🧠 Skills Gained
🔌 API Integration

🧠 Dynamic Data Handling in React

🎨 Responsive Frontend Design

🛠️ Node.js Backend Setup

🙋‍♂️ Author
Sujith Kumar
GitHub: @sujith525

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

### ✅ To Use This

1. Copy and paste the code above into a file called `README.md`
2. Place it in the root of your project (`FUTURE_FS_02`)
3. Commit it:
```bash
git add README.md
git commit -m "Add README"
git push origin main

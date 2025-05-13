const express = require('express');
const axios = require('axios');
require('dotenv').config(); // To use environment variables

const app = express();
const port = 5000;

// Weather API route
app.get('/weather', async (req, res) => {
  const city = req.query.city; // Get the city from the query parameter
  const apiKey = process.env.OPENWEATHER_API_KEY; // Get the API key from the .env file

  try {
    // Fetch current weather data from OpenWeather API
    const currentWeatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    // Fetch 5-day forecast data from OpenWeather API
    const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);

    // Combine both current weather and forecast data into a single object
    const weatherData = {
      current: currentWeatherResponse.data,
      forecast: forecastResponse.data
    };

    // Send the combined weather data as JSON response
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Send error message if the API request fails
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

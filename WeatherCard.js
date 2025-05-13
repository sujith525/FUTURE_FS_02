import React from 'react';

function WeatherCard({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;

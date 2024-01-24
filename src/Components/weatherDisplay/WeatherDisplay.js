import React, { useState } from "react";
import "./weatherDisplay.css";
import { SearchBar } from "../searchbar/SearchBar";
import { WeatherCard } from "../weatherCard/WeatherCard";

import humidity__icon from "../assets/humidity.png";
import wind__icon from "../assets/wind.png";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 24,
    location: "Ahmedabad",
    humidity: "64%",
    windSpeed: "18 km/h",
  });

  const updateWeatherData = (newData) => {
    setWeatherData(newData);
  };

  return (

    <div className="container">
      {/* Search Bar Component */}
      <SearchBar updateWeatherData={updateWeatherData} />
      <div id="weather-temp">{weatherData.temperature}°c</div>
      <div id="weather-location">{weatherData.location}</div>
      <div className="data-container">
        {/* WeatherCard components */}
        <WeatherCard
          icon={humidity__icon}
          value={weatherData.humidity}
          text="Humidity"
        />
        <WeatherCard
          icon={wind__icon}
          value={weatherData.windSpeed}
          text="Wind Speed"
        />
      </div>
    </div>
  );
};

export default WeatherDisplay;

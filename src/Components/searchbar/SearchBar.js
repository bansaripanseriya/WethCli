import React, { useState } from 'react';
import "./searchbar.css"

import clear__icon from '../assets/clear.png';
import drizzle__icon from '../assets/drizzle.png';
import rain__icon from '../assets/rain.png';
import snow__icon from '../assets/snow.png';
import cloud__icon from '../assets/cloud.png';
import search__icon from '../assets/search.png';

export const SearchBar = ({ updateWeatherData }) => {
  let api__key = '7d6578339af88227eba29ed846be298e';

  const [wicon, setWicon] = useState(cloud__icon);
  const [cityInput, setCityInput] = useState('');

  const search = async () => {
    if (cityInput === '') {
      return 0;
    } else {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${api__key}`;
        let response = await fetch(url);
        let data = await response.json();

        if (response.ok) {
          updateWeatherData({
            temperature: (data.main.temp - 273.15).toFixed(2),
            location: data.name,
            humidity: `${data.main.humidity}%`,
            windSpeed: `${Math.floor(data.wind.speed)} km/h`,
          });

          // Update weather icon
          if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setWicon(clear__icon);
          } else if (
            data.weather[0].icon === '02d' ||
            data.weather[0].icon === '02n'
          ) {
            setWicon(cloud__icon);
          } else if (
            data.weather[0].icon === '03d' ||
            data.weather[0].icon === '03n'
          ) {
            setWicon(drizzle__icon);
          } else if (
            data.weather[0].icon === '04d' ||
            data.weather[0].icon === '04n'
          ) {
            setWicon(drizzle__icon);
          } else if (
            data.weather[0].icon === '09d' ||
            data.weather[0].icon === '09n'
          ) {
            setWicon(rain__icon);
          } else if (
            data.weather[0].icon === '10d' ||
            data.weather[0].icon === '10n'
          ) {
            setWicon(rain__icon);
          } else if (
            data.weather[0].icon === '13d' ||
            data.weather[0].icon === '13n'
          ) {
            setWicon(snow__icon);
          } else {
            setWicon(clear__icon);
          }
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <>
      <div className="top-bar">
        <input
          type="text"
          id="cityInput"
          placeholder="Search"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search__icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
    </>
  );
};

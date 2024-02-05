import React from 'react'
import './Home.css'
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Users from './Users';
function Home() {
    const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
   
  const apiKey = '6dd257a160b75a0ac718119286153c03';

  const fetchWeather = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      console.log(response)
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError('Error fetching weather data. Please check the location and try again.');
    }
  };
  return (
    
    <div className='home'>
      <Link to="/">  <img className='home_logo' src="" alt="" /> </Link>
      <div className='home_container'>
          <h1>Enter Your Location</h1>

          <form action="">
              <h5>Location</h5>
              <input type="text" value={location} onChange={e=>setLocation(e.target.value)}/>
              
              <button type='submit' onClick={fetchWeather} className='home_signInButton'>Search</button>
          </form>
          
      </div>
      {weatherData && (
        <div>
          <h3>Weather in {weatherData.name}, {weatherData.sys.country}</h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    
  )
}

export default Home

import axios from 'axios';
import { useState } from 'react';
import './Weather.css';
const Weather = () => {
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState('');
  const apiKey = 'bad7212f4316633cd6edcf8824899f20';
  const getCity = (e) => {
    const city = e.target.value;
    setLocation(city);
  };
  const getWeather = () => {
    //   Weather api call
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      )
      .then((response) => setTemp(Math.round(response.data.main.temp - 273.5)));
  };

  //Component
  return (
    <div className='weather-container'>
      <div className='location'>
        <label htmlFor='location'>Enter City</label>
        <input value={location} onChange={getCity} id='location' type='text' />
      </div>
      <button className='submit' onClick={getWeather}>
        How is Weather ?
      </button>
      <div className='weather'>
        <h1>Temperature : {temp}</h1>
      </div>
    </div>
  );
};

export default Weather;

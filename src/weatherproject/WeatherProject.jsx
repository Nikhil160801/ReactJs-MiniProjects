// import { useState } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     try {
//       const API_KEY = '8f897ba89d6f58f0e8e3f98863108668'; // Replace with your OpenWeatherMap API key
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       setWeather(response.data);
//       setError('');
//     } catch (err) {
//       setError('City not found',err);
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-200 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h1 className="text-2xl font-bold text-center mb-4">Weather Forecast</h1>
//         <div className="mb-4">
//           <input
//             type="text"
//             className="w-full p-2 border rounded"
//             placeholder="Enter city name"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <button
//           onClick={fetchWeather}
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Get Weather
//         </button>
//         {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
//         {weather && (
//           <div className="mt-4">
//             <h2 className="text-xl font-bold">{weather.name}</h2>
//             <p>{weather.weather[0].description}</p>
//             <p className="text-2xl font-bold">{weather.main.temp}°C</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Weather;

import { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const apiKey = '8f897ba89d6f58f0e8e3f98863108668';
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(weatherResponse.data);
      setError('');  // Clear any previous error message

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      setForecast(forecastResponse.data.list.filter((_, idx) => idx % 8 === 0));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
      setForecast([]);
      setError('City not found. Please try again.');  // Set error message
    }
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeather(city);
      setCity('');
    }
  };

  return (
    <div className="min-h-screen bg-weather-texture bg-no-repeat bg-cover flex items-center justify-center">
      <div className="bg-blue-600 bg-opacity-75 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="duration-300 hover:scale-105 w-full bg-slate-600 text-white py-2 rounded hover:bg-orange-600"
        >
          Search
        </button>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {weather && !error && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p className="text-lg">{weather.weather[0].description}</p>
            <p className="text-lg">Humidity : {weather.main.humidity}</p>
            <p className="text-2xl font-bold">{weather.main.temp}°C</p>
          </div>
        )}

        {forecast.length > 0 && !error && (
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-2">5-Day Forecast</h3>
            <div className="grid grid-cols-2 gap-4">
              {forecast.map((day, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                  <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                  <p>{day.weather[0].description}</p>
                  <p className="font-bold">{day.main.temp}°C</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
  );
};

export default WeatherApp;

// --------------------------------------------JSON OBJECT IN data VARIABLE---------------------------------------------------
// {
//     "coord": {
//       "lon": -0.1257,
//       "lat": 51.5085
//     },
//     "weather": [
//       {
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 15.0,
//       "feels_like": 14.5,
//       "temp_min": 14.0,
//       "temp_max": 16.0,
//       "pressure": 1023,
//       "humidity": 72
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 3.09,
//       "deg": 240
//     },
//     "clouds": {
//       "all": 0
//     },
//     "dt": 1625212800,
//     "sys": {
//       "type": 2,
//       "id": 2019646,
//       "country": "GB",
//       "sunrise": 1625195554,
//       "sunset": 1625252408
//     },
//     "timezone": 3600,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
//
//   }

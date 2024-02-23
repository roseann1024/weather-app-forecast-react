import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function displayWeather(response) {
    setweatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      time: "13:35 Friday",
      date: new Date(response.data.dt * 1000),
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    console.log(response.data);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="search-form">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="🔍Enter a city..."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="button-search" />
              </div>
            </div>
          </form>
        </div>
        <div className="day-forecast">
          <div className="row">
            <div className="col-6">
              <div className="searched-city">
                <span className="icon-location">
                  <img
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/116/350/original/location_2838912.png?1708643713"
                    width="20"
                    alt="location-icon"
                  ></img>
                </span>
                <span className="city">
                  {weatherData.city}, {weatherData.country}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="unit">C | F</div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 section-1">
              <div className="date-today">
                <FormattedDate date={weatherData.date} />
              </div>
              <span className="icon"></span>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="degree">°C</span>
              <div className="feels-like">
                Feels like {Math.round(weatherData.feels_like)}°C
              </div>
            </div>
            <div className="col-6 weather-today">
              <ul>
                <li>
                  {" "}
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    width="100px"
                  />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>

                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/hr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bf54175800a55e59e6c4d6461deeef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);

    return <div className="loading">loading..</div>;
  }
}

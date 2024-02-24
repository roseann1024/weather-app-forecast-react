import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function displayWeather(response) {
    setweatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
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
          <WeatherInfo data={weatherData} />
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

import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState(null);

  function displayWeather(response) {
    setReady(true);
    setweatherData(response.data.main.temp);
    console.log(response.data.main.temp);
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
                <span className="city">{props.city}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="unit">C | F</div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 section-1">
              <div className="date-today">
                13:35 Friday <br />
                February 22, 2024
              </div>
              <span className="icon"></span>
              <span className="temperature">{Math.round(weatherData)}</span>
              <span className="degree">°C</span>
              <div className="feels-like">Feels like 5°</div>
            </div>
            <div className="col-6 weather-today">
              <ul>
                <li>
                  {" "}
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="partly sunny"
                    width="100px"
                  />
                </li>
                <li>Partly Cloudy</li>
                <li>Percipitation: 0%</li>
                <li>Humidity: 66%</li>
                <li>Wind: 14km/hr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=bf54175800a55e59e6c4d6461deeef12&units=metric`;

    axios.get(url).then(displayWeather);

    return <div>loading..</div>;
  }
}

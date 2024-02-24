import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
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
                {props.data.city}, {props.data.country}
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
              <FormattedDate date={props.data.date} />
            </div>

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="degree">°C</span>
            <div className="feels-like">
              Feels like {Math.round(props.data.feels_like)}°C
            </div>
          </div>
          <div className="col-6 weather-today">
            <ul>
              <li>
                {" "}
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </li>
              <li className="text-capitalize">{props.data.description}</li>

              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

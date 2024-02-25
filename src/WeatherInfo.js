import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="day-forecast">
        <div className="date-today">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="searched-city">
          <span className="icon-location">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/116/633/original/pngtree-flat-red-location-sign-png-image_6553065.png?1708891764"
              width="20"
              alt="location-icon"
            ></img>
          </span>
          <span className="city">
            {props.data.city}, {props.data.country}
          </span>
        </div>

        <div className="row row justify-content-center">
          <div className="col-6 section-1">
            <div className="temperature-details">
              <WeatherTemperature
                celsius={props.data.temperature}
                feels_like={props.data.feels_like}
                high={props.data.high}
                low={props.data.low}
              />
            </div>
          </div>
          <div className="col-6 weather-today">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />

            <div className="text-capitalize">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/116/634/original/temperature-control.png?1708892685"
                width="15"
                alt="thermostat-icon"
              />{" "}
              <span className="text-capitalize">{props.data.description}</span>
            </div>
            <div>
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/116/636/original/humidity_%282%29.png?1708892696"
                alt="humidity-icon"
                width="15"
              />{" "}
              Humidity: <strong>{props.data.humidity}%</strong>
            </div>
            <div>
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/116/635/original/wind_%281%29.png?1708892690"
                alt="wind-icon"
                width="15"
              />{" "}
              Wind: <strong>{props.data.wind}km/hr</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

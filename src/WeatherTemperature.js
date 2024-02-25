import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  let fahrenheit = (props.celsius * 9) / 5 + 32;
  let feels_like_fahrenheit = (props.feels_like * 9) / 5 + 32;
  let high_temp = (props.high * 9) / 5 + 32;
  let low_temp = (props.low * 9) / 5 + 32;

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="degree">
          {" "}
          ° C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>

        <div className="feels-like">
          Feels like <strong>{Math.round(props.feels_like)}°</strong>
        </div>
        <div className="high-low-temp">
          High: <strong>{Math.round(props.high)}°</strong> | Low:{" "}
          <strong>{Math.round(props.low)}°</strong>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="degree">
          ° F |{" "}
          <a href="/" onClick={showCelsius}>
            C
          </a>
        </span>
        <div className="feels-like">
          Feels like <strong> {Math.round(feels_like_fahrenheit)}° </strong>
        </div>
        <div className="high-low-temp">
          High: <strong>{Math.round(high_temp)}°</strong> | Low:{" "}
          <strong> {Math.round(low_temp)}°</strong>
        </div>
      </div>
    );
  }
}

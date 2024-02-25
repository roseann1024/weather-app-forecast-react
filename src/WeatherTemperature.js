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

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="degree">
          ° C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>

        <div className="feels-like">
          Feels like {Math.round(props.feels_like)}° C
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
          Feels like {Math.round(feels_like_fahrenheit)}° F
        </div>
      </div>
    );
  }
}

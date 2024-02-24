import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "CLOUDY",
    "04d": "CLOUDY",
    "09d": "RAIN",
    "10d": "RAIN",
    "11d": "SLEET",
    "13d": "SNOW",
    "50d": "FOG",

    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03n": "CLOUDY",
    "04n": "CLOUDY",
    "09n": "RAIN",
    "10n": "RAIN",
    "11n": "SLEET",
    "13n": "SNOW",
    "50n": "FOG",
  };

  if (
    (props.code === "01d",
    "02d",
    "03d",
    "04d",
    "09d",
    "10d",
    "11d",
    "13d",
    "50d")
  ) {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#FFE168"
        size={90}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#79c2d0"
        size={90}
        animate={true}
      />
    );
  }
}

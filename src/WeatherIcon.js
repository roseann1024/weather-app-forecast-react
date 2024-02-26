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
    props.code === "01d" ||
    props.code === "02d" ||
    props.code === "03d" ||
    props.code === "04d" ||
    props.code === "09d" ||
    props.code === "10d" ||
    props.code === "11d" ||
    props.code === "13d" ||
    props.code === "50d"
  ) {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#fcff82"
        size={70}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#BFECC5"
        size={70}
        animate={true}
      />
    );
  }
}

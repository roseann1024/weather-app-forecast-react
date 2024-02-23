import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let dates = props.date.getDate();
  let year = props.date.getFullYear();

  return (
    <div>
      {hours}:{minutes}, {day} | {month} {dates}, {year}
    </div>
  );
}

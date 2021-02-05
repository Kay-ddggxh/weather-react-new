import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temp = Math.round(props.data.main.temp);
    return `${temp}°C`;
  }

  return (
    <div className="WeatherForecastPreview row">
      <div className="col-4">{hours()}</div>
      <div className="col-4">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="col-4">{temperature()}</div>
    </div>
  );
}

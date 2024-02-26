import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">🌡WEATHER APP</h1>
        <Weather defaultCity="Centennial" />
        <footer>
          This App was coded by{" "}
          <a
            href="https://github.com/roseann1024"
            target="_blank"
            rel="noreferrer"
          >
            Rose Ann V. Austria
          </a>{" "}
          and open-sourced in{" "}
          <a
            href="https://github.com/roseann1024/weather-app-forecast-react"
            target="_blank"
            rel="noreferrer"
          >
            Git-Hub.
          </a>
        </footer>
      </div>
    </div>
  );
}

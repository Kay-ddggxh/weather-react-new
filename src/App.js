import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dublin" />
        <footer>
          <a
            href="https://github.com/Kathrin-ddggxh/weather-react-new"
            target="_blank"
          >
            Open source code{" "}
          </a>
          by Kathrin Welfare
        </footer>
      </div>
    </div>
  );
}

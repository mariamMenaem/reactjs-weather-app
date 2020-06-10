import React from "react";
import "./App.css";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div className="App d-lg-flex mx-auto mt-5  w-50">
      <WeatherApp location="Cairo , EG" />
      <WeatherApp location="London , Gb" />
      <WeatherApp location="melton , au" />
    </div>
  );
}

export default App;

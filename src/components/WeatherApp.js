import React, { useState, useEffect } from "react";
import WetherCard from "./card/WetherCard";
import "./WeatherApp.css";

function WeatherApp({ location }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=2d52345381bafa0ca13ae75473f16054`
    );
    const resJson = await apiRes.json();
    setWeather({
      city: resJson.name,
      country: resJson.sys.country,
      temp: resJson.main.temp,
      condition: resJson.weather[0].main,
    });
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  return (
    <div className="mx-auto my-5">
      <WetherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default WeatherApp;

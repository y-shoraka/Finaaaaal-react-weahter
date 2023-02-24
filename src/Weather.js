import React,{ useState } from "react";
import "./Weathers.css";
import axios from "axios";

export default function Weather() {
  let [City, SetCity] = useState("");
  let [temprature, setTemprature] = useState("");
  function ShowResult(response) {
    console.log(response);
    setTemprature(
      <div>
        <li>Tempreture : {Math.round(response.data.main.temp)}°C </li>
        <li>Humidity : {response.data.main.humidity}%</li>
        <li>Wind : {Math.round(response.data.wind.speed)} Km/hr</li>
        <li>Feels like : {Math.round(response.data.main.feels_like)}°C </li>
      </div>
    );
  }
  function getResult(event) {
    
    event.preventDefault();

    let apiKey = "5122c73584c58f76c2670a7ce4d20f3a";
    console.log(City.target.value);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${City.target.value}&appid=${apiKey}&units=metric`
      )
      .then(ShowResult);
  }
  return (
    <div>
      <h4>Weather App</h4>
      <form onSubmit={getResult}>
        <input type="search" placeholder="Search for City" onChange={SetCity} />
        <input className="submit" type="submit" value="Search" />
      </form>
      {temprature}
    </div>
  );
}

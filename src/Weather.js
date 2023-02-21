import { useState } from "react";
import "./Weathers.css";
import axios from "axios";

export default function Weather(props) {
  let [City, SetCity] = useState("");
  function ShowResult(response) {
    console.log(response)
  }
  function getResult() {
    apiKey = "5122c73584c58f76c2670a7ce4d20f3a";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
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
    </div>
  );
}

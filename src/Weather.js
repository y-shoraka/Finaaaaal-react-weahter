import React, { useState  , useEffect} from "react";
import "./Weathers.css";
import axios from "axios";
import Chart from "./Chart";

export default function Weather() {
  let [extraInfo, setExtraInfo] = useState("");
  let [DefStyle1, setDefStyle1] = useState("selectedDay");
  let [DefStyle2, setDefStyle2] = useState("eachDay");
  let [DefStyle3, setDefStyle3] = useState("eachDay");
  let [DefStyle4, setDefStyle4] = useState("eachDay");
  let [DefStyle5, setDefStyle5] = useState("eachDay");
  let [DefStyle6, setDefStyle6] = useState("eachDay");
  let [DefStyle7, setDefStyle7] = useState("eachDay");
  let [City, SetCity] = useState("Tehran");
  let [temperature, setTemperature] = useState("");
  let [SubmittedCity, setSubmittedCity] = useState("london");
  let photoSrc1 =
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png";
  let [imgSrc, setImgSrc] = useState([photoSrc1, photoSrc1]);
  let [forTemp, setForTemp] = useState([10, 6, 8, 7, 6, 5, 9]);
  let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let CurrentDate = new Date();
  let currentDay = CurrentDate.getDay();
  let time = `${CurrentDate.getHours()}:${CurrentDate.getMinutes()}`;

  function set1() {
    setDefStyle1("selectedDay");
    setDefStyle2("eachDay");
    setDefStyle3("eachDay");
    setDefStyle4("eachDay");
    setDefStyle5("eachDay");
    setDefStyle6("eachDay");
    setDefStyle7("eachDay");
  }
  function set2() {
    setDefStyle2("selectedDay");
    setDefStyle1("eachDay");
    setDefStyle3("eachDay");
    setDefStyle4("eachDay");
    setDefStyle5("eachDay");
    setDefStyle6("eachDay");
    setDefStyle7("eachDay");
  }
  function set3() {
    setDefStyle3("selectedDay");
    setDefStyle2("eachDay");
    setDefStyle1("eachDay");
    setDefStyle4("eachDay");
    setDefStyle5("eachDay");
    setDefStyle6("eachDay");
    setDefStyle7("eachDay");
  }
  function set4() {
    setDefStyle4("selectedDay");
    setDefStyle1("eachDay");
    setDefStyle2("eachDay");
    setDefStyle3("eachDay");
    setDefStyle5("eachDay");
    setDefStyle6("eachDay");
    setDefStyle7("eachDay");
  }
  function set5() {
    setDefStyle5("selectedDay");
    setDefStyle1("eachDay");
    setDefStyle2("eachDay");
    setDefStyle3("eachDay");
    setDefStyle4("eachDay");
    setDefStyle6("eachDay");
    setDefStyle7("eachDay");
  }
  function set6() {
    setDefStyle6("selectedDay");
    setDefStyle1("eachDay");
    setDefStyle2("eachDay");
    setDefStyle3("eachDay");
    setDefStyle4("eachDay");
    setDefStyle5("eachDay");
    setDefStyle7("eachDay");
  }
  function set7() {
    setDefStyle7("selectedDay");
    setDefStyle2("eachDay");
    setDefStyle3("eachDay");
    setDefStyle4("eachDay");
    setDefStyle5("eachDay");
    setDefStyle6("eachDay");
  }

  function Stop(event) {
    event.preventDefault();
  }
  function ChangeStyle(event) {
    event.preventDefault();
    setExtraInfo("hi");
  }

  function ShowForecast(response) {
    setImgSrc([
      response.data.daily[0].condition.icon_url,
      response.data.daily[1].condition.icon_url,
      response.data.daily[2].condition.icon_url,
      response.data.daily[3].condition.icon_url,
      response.data.daily[4].condition.icon_url,
      response.data.daily[5].condition.icon_url,
      response.data.daily[6].condition.icon_url,
    ]);
    //console.log(response.data.daily[0]);
    setForTemp([
      response.data.daily[0].temperature.day,
      response.data.daily[1].temperature.day,
      response.data.daily[2].temperature.day,
      response.data.daily[3].temperature.day,
      response.data.daily[4].temperature.day,
      response.data.daily[5].temperature.day,
      response.data.daily[6].temperature.day,
    ]);
  }

  useEffect(()=> {axios
    .get(
    `https://api.shecodes.io/weather/v1/forecast?query=london&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
    )
    .then(ShowForecast);} , [])
  
  function ShowResult(response) {
    setSubmittedCity(City.target.value);
    //console.log(response);
    setTemperature(
      <div>
        <li>
          Feels like :{" "}
          <span className="detailKey">
            {Math.round(response.data.main.feels_like)}°C
          </span>
        </li>
        <li>
          Humidity :{" "}
          <span className="detailKey">{response.data.main.humidity}%</span>
        </li>
        <li>
          Wind :{" "}
          <span className="detailKey">
            {Math.round(response.data.wind.speed)} Km/hr
          </span>
        </li>
      </div>
    );
  }
  

  function getResult(event) {
    event.preventDefault();

    let apiKey = "5122c73584c58f76c2670a7ce4d20f3a";
    //console.log(City.target.value);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${City.target.value}&appid=${apiKey}&units=metric`
      )
      .then(ShowResult);
    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?query=${City.target.value}&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
      )
      .then(ShowForecast);
  }
  return (
    <div>
      <div className="Header">
        <span className="Location">
          <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
          {SubmittedCity.charAt(0).toUpperCase() + SubmittedCity.slice(1)}
        </span>
        <form onSubmit={getResult}>
          <input
            className="searchBar"
            type="search"
            placeholder="Search City..."
            onChange={SetCity}
          />
        </form>
      </div>
      <div>
        <ul className="dayButtons">
          <a>
            <li className="notActivated">Today</li>
          </a>
          <a>
            <li className="notActivated">Tomorrow</li>
          </a>
        </ul>
      </div>
      <div className="mainPart">
        <div className="coluums">
          <div className="daysForecast">
            <li className={DefStyle1} onClick={set1}>
              <a onClick={Stop} href="#">
                <div className="selectedHeader">
                  <strong>{weekDay[currentDay]}</strong>
                  <strong className="hour">{time}</strong>
                </div>
                <hr />
                <div className="MainFlex">
                  <img src={imgSrc[0]} alt="weather"></img>
                  <h5>
                    <span className="number">{Math.round(forTemp[0])}</span>°C
                  </h5>{" "}
                </div>
                <div className="extraInfo">{temperature}</div>
              </a>
            </li>
            <li className={DefStyle2} onClick={set2}>
              <a onClick={Stop} href="#">
                <div className="selectedHeader">
                  <strong>{weekDay[(currentDay + 1) % 7]}</strong>
                  <strong className="hour">{time}</strong>
                </div>
                <hr />
                <div className="MainFlex">
                  <img src={imgSrc[1]} alt="weather"></img>
                  <h5>
                    <span className="number">{Math.round(forTemp[1])}</span>°C
                  </h5>{" "}
                </div>
                <div className="extraInfo">{temperature}</div>
              </a>
            </li>
            <li className={DefStyle3} onClick={set3}>
              <a onClick={Stop} href="#">
                <div className="selectedHeader">
                  <strong>{weekDay[(currentDay + 2) % 7]}</strong>
                  <strong className="hour">{time}</strong>
                </div>
                <hr />
                <div className="MainFlex">
                  <img src={imgSrc[2]} alt="weather"></img>
                  <h5>
                    <span className="number">{Math.round(forTemp[2])}</span>°C
                  </h5>{" "}
                </div>
                <div className="extraInfo">{temperature}</div>
              </a>
            </li>
            <li className={DefStyle4} onClick={set4}>
              <a onClick={Stop} href="#">
                <div className="selectedHeader">
                  <strong>{weekDay[(currentDay + 3) % 7]}</strong>
                  <strong className="hour">{time}</strong>
                </div>
                <hr />
                <div className="MainFlex">
                  <img src={imgSrc[3]} alt="weather"></img>
                  <h5>
                    <span className="number">{Math.round(forTemp[3])}</span>°C
                  </h5>{" "}
                </div>
                <div className="extraInfo">{temperature}</div>
              </a>
            </li>
            <li className={DefStyle5} onClick={set5}>
              <a onClick={Stop} href="#">
                <div className="selectedHeader">
                  <strong>{weekDay[(currentDay + 4) % 7]}</strong>
                  <strong className="hour">{time}</strong>
                </div>
                <hr />
                <div className="MainFlex">
                  <img src={imgSrc[4]} alt="weather"></img>
                  <h5>
                    <span className="number">{Math.round(forTemp[4])}</span>°C
                  </h5>{" "}
                </div>
                <div className="extraInfo">{temperature}</div>
              </a>
            </li>
            <li className={DefStyle6} onClick={set6}>
              <a onClick={Stop} href="#">
                <div className="selectedHeader">
                  <strong>{weekDay[(currentDay + 5) % 7]}</strong>
                  <strong className="hour">hour</strong>
                </div>
                <hr />
                <div className="MainFlex">
                  <img src={imgSrc[5]} alt="weather"></img>
                  <h5>
                    <span className="number">{Math.round(forTemp[5])}</span>°C
                  </h5>{" "}
                </div>
                <div className="extraInfo">{temperature}</div>
              </a>
            </li>
            <li className={DefStyle7} onClick={set7}>
              <a onClick={Stop} href="#">
                <div className="selectedHeader">
                  <strong>{weekDay[(currentDay + 6) % 7]}</strong>
                  <strong className="hour">hour</strong>
                </div>
                <hr />
                <div className="MainFlex">
                  <img src={imgSrc[6]} alt="weather"></img>
                  <h5>
                    <span className="number">{Math.round(forTemp[6])}</span>°C
                  </h5>{" "}
                </div>
                <div className="extraInfo">{temperature}</div>
              </a>
            </li>
          </div>
        </div>
        <div className="columns2">
          <div>
            <Chart forecastCity={SubmittedCity} />
          </div>
          <div>popular cities</div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./Weathers.css";
import axios from "axios";
import Chart from "./Chart";
import worldMap2 from "./img/worldMap2.png";

export default function Weather() {
  let photoSrc1 =
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png";

  let [CalImg, setCalImg] = useState(photoSrc1);
  let [CalTemp, setCalTemp] = useState("29");
  let [description, setDescription] = useState("Mostly Sunny");
  let [CalImg2, setCalImg2] = useState(photoSrc1);
  let [CalTemp2, setCalTemp2] = useState("29");
  let [description2, setDescription2] = useState("Mostly Sunny");
  let [DefStyle1, setDefStyle1] = useState("selectedDay");
  let [Max, setMax] = useState("10");
  let [Min, setMin] = useState("10");
  let [Humidity, setHumidity] = useState("44%");
  let [Wind, setWind] = useState("4km/hr");
  let [DefStyle2, setDefStyle2] = useState("eachDay");
  let [DefStyle3, setDefStyle3] = useState("eachDay");
  let [DefStyle4, setDefStyle4] = useState("eachDay");
  let [DefStyle5, setDefStyle5] = useState("eachDay");
  let [DefStyle6, setDefStyle6] = useState("eachDay");
  let [DefStyle7, setDefStyle7] = useState("eachDay");
  let [City, SetCity] = useState("Tehran");
  let [SubmittedCity, setSubmittedCity] = useState("london");

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
    setDefStyle1("eachDay");
    setDefStyle2("eachDay");
    setDefStyle3("eachDay");
    setDefStyle4("eachDay");
    setDefStyle5("eachDay");
    setDefStyle6("eachDay");
  }

  function Stop(event) {
    event.preventDefault();
  }

  function ShowForecast(response) {
    console.log(response);
    setImgSrc([
      response.data.daily[0].condition.icon_url,
      response.data.daily[1].condition.icon_url,
      response.data.daily[2].condition.icon_url,
      response.data.daily[3].condition.icon_url,
      response.data.daily[4].condition.icon_url,
      response.data.daily[5].condition.icon_url,
      response.data.daily[6].condition.icon_url,
    ]);
    setMax([
      response.data.daily[0].temperature.maximum,
      response.data.daily[1].temperature.maximum,
      response.data.daily[2].temperature.maximum,
      response.data.daily[3].temperature.maximum,
      response.data.daily[4].temperature.maximum,
      response.data.daily[5].temperature.maximum,
      response.data.daily[6].temperature.maximum,
    ]);
    setMin([
      response.data.daily[0].temperature.minimum,
      response.data.daily[1].temperature.minimum,
      response.data.daily[2].temperature.minimum,
      response.data.daily[3].temperature.minimum,
      response.data.daily[4].temperature.minimum,
      response.data.daily[5].temperature.minimum,
      response.data.daily[6].temperature.minimum,
    ]);
    setWind([
      response.data.daily[0].wind.speed,
      response.data.daily[1].wind.speed,
      response.data.daily[2].wind.speed,
      response.data.daily[3].wind.speed,
      response.data.daily[4].wind.speed,
      response.data.daily[5].wind.speed,
      response.data.daily[6].wind.speed,
    ]);
    setHumidity([
      response.data.daily[0].temperature.humidity,
      response.data.daily[1].temperature.humidity,
      response.data.daily[2].temperature.humidity,
      response.data.daily[3].temperature.humidity,
      response.data.daily[4].temperature.humidity,
      response.data.daily[5].temperature.humidity,
      response.data.daily[6].temperature.humidity,
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
    set1();
  }
  function ShowColifornia(response) {
    setCalTemp(response.data.daily[0].temperature.day);
    console.log(response.data);
    setCalImg(response.data.daily[0].condition.icon_url);
    setDescription(response.data.daily[0].condition.description);
  }

  function ShowSingapore(response) {
    setCalTemp2(response.data.daily[0].temperature.day);
    console.log(response.data);
    setCalImg2(response.data.daily[0].condition.icon_url);
    setDescription2(response.data.daily[0].condition.description);
  }
 
   
  useEffect(() => {
    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?query=london&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
      )
      .then(ShowForecast);

    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?query=san-francisco&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
      )
      .then(ShowColifornia);
    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?query=singapore&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
      )
      .then(ShowSingapore);
  }, []);
  let a = 2;

  function getResult(event) {
    event.preventDefault();
    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?query=${City.target.value}&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
      )
      .then(ShowForecast);
    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?query=${City.target.value}&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
      )
      .then(setSubmittedCity(City.target.value));
  }
  return (
    <div className="Body">
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
            <li className="notActivated" onClick={set1}>Today</li>
            <li className="notActivated" onClick={set2}>Tomorrow</li>
        </ul>
      </div>
      <div className="mainPart">
        <div className="coluums">
          <div className="daysForecast">
            <li className={DefStyle1} onClick={set1}>
              <a onClick={Stop} href="/">
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
                <div className="extraInfo">
                  <div>
                    <li>
                      Maximum :{" "}
                      <span className="detailKey">{Math.ceil(Max[0])}°C</span>
                    </li>
                    <li>
                      Minimum :{" "}
                      <span className="detailKey">{Math.floor(Min[0])}°C</span>
                    </li>
                    <li>
                      Humidity :{" "}
                      <span className="detailKey">{Humidity[0]}%</span>
                    </li>
                    <li>
                      Wind :{" "}
                      <span className="detailKey">
                        {Math.round(Wind[0])} Km/hr
                      </span>
                    </li>
                  </div>
                </div>
              </a>
            </li>
            <li className={DefStyle2} onClick={set2}>
              <a onClick={Stop} href="/">
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
                <div className="extraInfo">
                  <div>
                    <li>
                      Maximum :{" "}
                      <span className="detailKey">{Math.ceil(Max[1])}°C</span>
                    </li>
                    <li>
                      Minimum :{" "}
                      <span className="detailKey">{Math.floor(Min[1])}°C</span>
                    </li>
                    <li>
                      Humidity :{" "}
                      <span className="detailKey">{Humidity[1]}%</span>
                    </li>
                    <li>
                      Wind :{" "}
                      <span className="detailKey">
                        {Math.round(Wind[1])} Km/hr
                      </span>
                    </li>
                  </div>
                </div>
              </a>
            </li>
            <li className={DefStyle3} onClick={set3}>
              <a onClick={Stop} href="/">
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
                <div className="extraInfo">
                  <div>
                    <li>
                      Maximum :{" "}
                      <span className="detailKey">{Math.ceil(Max[2])}°C</span>
                    </li>
                    <li>
                      Minimum :{" "}
                      <span className="detailKey">{Math.floor(Min[2])}°C</span>
                    </li>
                    <li>
                      Humidity :{" "}
                      <span className="detailKey">{Humidity[2]}%</span>
                    </li>
                    <li>
                      Wind :{" "}
                      <span className="detailKey">
                        {Math.round(Wind[2])} Km/hr
                      </span>
                    </li>
                  </div>
                </div>
              </a>
            </li>
            <li className={DefStyle4} onClick={set4}>
              <a onClick={Stop} href="/">
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
                <div className="extraInfo">
                  <div>
                    <li>
                      Maximum :{" "}
                      <span className="detailKey">{Math.ceil(Max[3])}°C</span>
                    </li>
                    <li>
                      Minimum :{" "}
                      <span className="detailKey">{Math.floor(Min[3])}°C</span>
                    </li>
                    <li>
                      Humidity :{" "}
                      <span className="detailKey">{Humidity[3]}%</span>
                    </li>
                    <li>
                      Wind :{" "}
                      <span className="detailKey">
                        {Math.round(Wind[3])} Km/hr
                      </span>
                    </li>
                  </div>
                </div>
              </a>
            </li>
            <li className={DefStyle5} onClick={set5}>
              <a onClick={Stop} href="/">
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
                <div className="extraInfo">
                  <div>
                    <li>
                      Maximum :{" "}
                      <span className="detailKey">{Math.ceil(Max[4])}°C</span>
                    </li>
                    <li>
                      Minimum :{" "}
                      <span className="detailKey">{Math.floor(Min[4])}°C</span>
                    </li>
                    <li>
                      Humidity :{" "}
                      <span className="detailKey">{Humidity[4]}%</span>
                    </li>
                    <li>
                      Wind :{" "}
                      <span className="detailKey">
                        {Math.round(Wind[4])} Km/hr
                      </span>
                    </li>
                  </div>
                </div>
              </a>
            </li>
            <li className={DefStyle6} onClick={set6}>
              <a onClick={Stop} href="/">
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
                <div className="extraInfo">
                  <div>
                    <li>
                      Maximum :{" "}
                      <span className="detailKey">{Math.ceil(Max[5])}°C</span>
                    </li>
                    <li>
                      Minimum :{" "}
                      <span className="detailKey">{Math.floor(Min[5])}°C</span>
                    </li>
                    <li>
                      Humidity :{" "}
                      <span className="detailKey">{Humidity[5]}%</span>
                    </li>
                    <li>
                      Wind :{" "}
                      <span className="detailKey">
                        {Math.round(Wind[5])} Km/hr
                      </span>
                    </li>
                  </div>
                </div>
              </a>
            </li>
            <li className={DefStyle7} onClick={set7}>
              <a onClick={Stop} href="/">
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
                <div className="extraInfo">
                  <div>
                    <li>
                      Maximum :{" "}
                      <span className="detailKey">{Math.ceil(Max[6])}°C</span>
                    </li>
                    <li>
                      Minimum :{" "}
                      <span className="detailKey">{Math.floor(Min[6])}°C</span>
                    </li>
                    <li>
                      Humidity :{" "}
                      <span className="detailKey">{Humidity[6]}%</span>
                    </li>
                    <li>
                      Wind :{" "}
                      <span className="detailKey">
                        {Math.round(Wind[6])} Km/hr
                      </span>
                    </li>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div>
            <img className="mapImg" src={worldMap2}  alt="Map"/>
          </div>
          <p className="Footer">
            <a
              className="SourceCode"
              href="https://github.com/y-shoraka/react-weather"
              target={"_blank"}
            >
              Open-Source Code
            </a>{" "}
            , by Yasaman Shoraka from{" "}
            <a
              className="SourceCode"
              href="https://www.shecodes.io/"
              target={"_blank"}
            >
              SheCodes
            </a>
          </p>
        </div>

        <div className="columns2">
          <div>
            <Chart forecastCity={SubmittedCity} />
          </div>
          <div>
            <h4 className="otherCity">Other large cities</h4>
            <div className="popularCity">
              <div>
                <div className="country">Us</div>
                <div>Colirfornia</div>
                <div className="description">{description}</div>
              </div>
              <div className="imgTemp">
                <div>
                  <img className="popularImg" src={CalImg} alt="ColiforniaWeather" />
                </div>
                <div className="description">{Math.round(CalTemp)}°C</div>
              </div>
            </div>
            <div className="popularCity">
              <div>
                <div className="country">Singapore</div>
                <div>Singapore</div>
                <div className="description">{description2}</div>
              </div>
              <div className="imgTemp">
                <div>
                  <img className="popularImg" src={CalImg2} alt="SingaporeWeather" />
                </div>
                <div className="description">{Math.round(CalTemp2)}°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

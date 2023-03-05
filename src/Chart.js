import React, { useState, useEffect } from "react";
import CanvasJSReact from "./canvasjs.react";
import axios from "axios";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = (props) => {
  const [humidityData, setHumidityData] = useState([]);
  console.log(props.forecastCity);

  let apiKey = "ef45dbb5226daf4a30b508c33ota60fe";

  useEffect(() => {
    const fetchHumidityData = async () => {
      const response = await axios.get(
        `https://api.shecodes.io/weather/v1/forecast?query=${props.forecastCity}&key=${apiKey}&units=metric`
      );
      setHumidityData([
        response.data.daily[0].temperature.humidity,
        response.data.daily[1].temperature.humidity,
        response.data.daily[2].temperature.humidity,
        response.data.daily[3].temperature.humidity,
        response.data.daily[4].temperature.humidity,
        response.data.daily[5].temperature.humidity,
        response.data.daily[6].temperature.humidity,
      ]);
    };
    fetchHumidityData();
  }, [props]);

  const options = {
    backgroundColor: "#101016",
    animationEnabled: true,
    dataPointWidth: 10,
    height: 200,
    width: 200,
    margin: 10,
    color: "grey",
    title: {
      fontColor: "white",
      text: props.props,
      fontFamily: "sans-serif",
    },
    data: [
      {
        color: "#BBD8EC",
        type: "column",
        dataPoints: [
          { label: "day1", y: humidityData[0] },
          { label: "day2", y: humidityData[1] },
          { label: "day3", y: humidityData[2] },
          { label: "day4", y: humidityData[3] },
          { label: "day5", y: humidityData[4] },
          { label: "day5", y: humidityData[5] },
          { label: "day5", y: humidityData[6] },
        ],
      },
    ],
  };

  return (
    <div>
      <div>{props.forecastCity}</div>
      <CanvasJSChart options={options} props={props.forecastCity} />
    </div>
  );
};

export default Chart;
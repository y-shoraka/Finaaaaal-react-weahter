import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import axios from "axios";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let Humidity =[] ;

class Chart extends Component {
  render() {
	function humidity(response) {
		return Humidity = [
		  response.data.daily[0].temperature.humidity,
		  response.data.daily[1].temperature.humidity,
		  response.data.daily[2].temperature.humidity,
		  response.data.daily[3].temperature.humidity,
		  response.data.daily[4].temperature.humidity,
		  response.data.daily[5].temperature.humidity,
		  response.data.daily[6].temperature.humidity,
		 
		];
	  }
	  axios
		.get(
		  `https://api.shecodes.io/weather/v1/forecast?query=${this.props}&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
		)
		.then(humidity);
		
    let options = {
 
      backgroundColor: "#101016",
      animationEnabled: true,
      dataPointWidth: 10,
      height: 200,
      width: 200,
      margin: 10,
      color: "grey",
      title: {
        fontColor: "white",
        text: this.props.props,
        fontFamily: "sans-serif",
      },
      data: [
        {
			
          color: "#BBD8EC",
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            { label: "day1", y: Humidity[0] },
            { label: "day2", y: Humidity[1] },
            { label: "day3", y: Humidity[2] },
            { label: "day4", y: Humidity[3] },
            { label: "day5", y: Humidity[4] },
			{ label: "day5", y: Humidity[5] },
			{ label: "day5", y: Humidity[6] },

          ],
        },
      ],
    };
    return (
      <div>
		<div>{this.props.forecastCity}</div>
        <CanvasJSChart
          options={options} props = {this.props.forecastCity}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default Chart;

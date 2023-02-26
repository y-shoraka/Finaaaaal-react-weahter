import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import weather from "./Weather" ; 
import axios from 'axios';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart; 

function humidity(response){
console.log(response.data);
}
firstData();
function firstData(){
        axios
        .get(
          `https://api.shecodes.io/weather/v1/forecast?query=london&key=d622ab03edofbbtc80f362a442d6777c&units=metric`
        )
        .then(humidity); 
    }
class Chart extends Component {
   
	render() {
		const options = {
            backgroundColor: "#101016" ,
            animationEnabled: true,
            dataPointWidth: 10 ,
            height: 200, 
            width:200,
            margin: 10 ,
            color:"grey" ,
			title: {
                fontColor: "white",
				text: "Humidity"
			},
			data: [
                
			{
                color:"#BBD8EC",
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Apple",  y: 10  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Chart ;                             
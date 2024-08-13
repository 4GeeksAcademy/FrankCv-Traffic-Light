import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./trafficLight.jsx"
//create your first component



const Home = () => {
	//const [arrayColors, setArrayColors] = useState([`red`, `yellow`, `green`]);

	// const [traffic, setColor] = useState([`danger`, `warning`, `success`]);

	const [isOn, setOn] = useState(``);  // rojo, amarillo verde

	// console.log(red, yellow, green);
	const trafficLight = (color) => {
		console.log(`foundColor` + color);
		setOn(color);
	}


	return (
		<div className="container-fluid d-flex flex-column justify-content-center align-items-center">
			<div className="bg-dark mb-0" style={{ width: `20px`, height: `50px` }}>
			</div>
			<div className="container text-center bg-black" style={{ width: `80px`, height: `300px` }} >
				<TrafficLight trafficLight={`danger`} onClick={() => trafficLight(`danger`)} on={isOn} />
				<TrafficLight trafficLight={`warning`} onClick={() => trafficLight(`warning`)} on={isOn} />
				<TrafficLight trafficLight={`success`} onClick={() => trafficLight(`success`)} on={isOn} />
			</div>
			<div className="container mt-3" style={{ width: `160px` }}><button type="button" className="btn btn-secondary btn-sm" style={{ width: `100%`, height: `100%` }} onClick={trafficLight}>Automatic Traffic</button></div>
		</div>

	);
};

export default Home;

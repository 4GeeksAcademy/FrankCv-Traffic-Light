import React from "react";

const TrafficLight = ({ trafficLight, onClick, on}) => {
    console.log(on, trafficLight);

    return <div className="row">
        <div className="col mt-3">
            <button type="button" onClick={onClick} className={`btn btn-${trafficLight} rounded-circle mt-3 ${on === trafficLight ? on : ``} `} style={{ width: `60px`, height: `60px` }} ></button>
        </div>
    </div>
}


export default TrafficLight
import React from "react";

function TopContainer(props) {
  return (
    <div className="contentTopDiv">
      <div className="topLeft">
        <h2>
          {props.passCity}, {props.passCountry}
        </h2>
        <h1>
          {props.passTemperature}
          <sup>o</sup>C
        </h1>
      </div>
      <div className="topRight">
        <div className="climateImageDiv">
          <img
            src={props.passIcon}
            alt="Climate Symbol"
            className="climateSymbol"
          />
        </div>
        <h2>{props.passDescription}</h2>
      </div>
    </div>
  );
}
export default TopContainer;

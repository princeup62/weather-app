import React from "react";
import wheathericon from "./wheathericon.png";

function Front() {
  return (
    <div className="frontWrapper">
      <div className="divImage">
        <img className="iconImage" src={wheathericon} alt="skmasamksmk" />
      </div>

      <div className="titleDiv">
        <h1 className="Title">Weather App</h1>
      </div>
    </div>
  );
}

export default Front;

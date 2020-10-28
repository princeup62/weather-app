import React from "react";
import BottomValues from "./BottomValues";
import PressureImage from "./PressureImage.png";
import WindImage from "./windImage.png";
import HumidityImage from "./humidityImage.png";

function BottomContainer(props) {
  return (
    <div className="contentBottomDiv">
      <BottomValues
        title="humidity"
        photo={HumidityImage}
        value={props.passHumidity}
      />
      <BottomValues
        title="Pressue"
        photo={PressureImage}
        value={props.passPressure}
      />
      <BottomValues title="Wind" photo={WindImage} value={props.passWind} />
    </div>
  );
}
export default BottomContainer;

import React from "react";

function BottomValues(props) {
  return (
    <>
      <div className="pressureSection">
        <h3 className="bottomTitle">{props.title}</h3>
        <img className="titleImages" src={props.photo} alt="pressure" />
        <h1 className="titleValue">{props.value}</h1>
      </div>
    </>
  );
}

export default BottomValues;

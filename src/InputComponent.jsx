import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";


function InputComponent(props) {
  let [inputValue, setInputValue] = useState("");
  return (
    <div className="inputWrapper">
      <input
        className="input"
        type="text"
        placeholder="Location"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="inputBtn"
        onClick={() => {
          if (inputValue !== "") {
            props.recievValue(inputValue);
            setInputValue("");
          }
        }}
      >
        <SearchIcon />
      </button>
    </div>
  );
}
export default InputComponent;

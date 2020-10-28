import React, { useState, useEffect } from "react";
import FloatingLeafs from "./FloatingLeafs";
import InputComponent from "./InputComponent";
import axios from "axios";
import BottomContainer from "./BottomContainer";
import TopContainer from "./TopContainer";
import ErrPageComponent from "./ErrPageComponent";
import Front from "./Front";


function App() {
  let [btnValue, setBtnValue] = useState("");
  let [fetchData, setFetchData] = useState({
    fetchHumidity: "",
    fetchPressure: "",
    fetchWind: "",
    fetchTemperature: "",
    fetchWeatherDescription: "",
    fetchCity: "",
    fetchLocation: "",
  });
  let [err, setErr] = useState("");

  useEffect(() => {
    async function getData() {
      if (btnValue !== "") {
        try {
          const newLocal =
            "http://api.weatherstack.com/current?access_key=2e3012b75c02220e5f4fa3ef11017a33&query=";
          const res = await axios.get(newLocal + btnValue);

          setFetchData({
            fetchHumidity: res.data.current.humidity,
            fetchPressure: res.data.current.pressure,
            fetchWind: res.data.current.wind_speed,
            fetchTemperature: res.data.current.temperature,
            fetchWeatherDescription: res.data.current.weather_descriptions[0],
            fetchCity: res.data.location.name,
            fetchCountry: res.data.location.country,
            fetchWeatherIcon: res.data.current.weather_icons[0],
          });
          setErr("");
        } catch {
          setErr(
            "The Location you're looking for is either is either not in our list or not exist. "
          );
        }
      }
    }
    getData();
  }, [btnValue]);

  return (
    <div className="mainOuterContainer">
      <FloatingLeafs />
      <InputComponent
        recievValue={(recived) => {
          setBtnValue(recived);
        }}
      />
      {btnValue === "" ? (
        <Front />
      ) : err === "" ? (
        <div className="ContentDiv">
          <TopContainer
            passCity={fetchData.fetchCity}
            passCountry={fetchData.fetchCountry}
            passTemperature={fetchData.fetchTemperature}
            passDescription={fetchData.fetchWeatherDescription}
            passIcon={fetchData.fetchWeatherIcon}
          />

          <BottomContainer
            passHumidity={fetchData.fetchHumidity}
            passPressure={fetchData.fetchPressure}
            passWind={fetchData.fetchWind}
          />
        </div>
      ) : (
        <ErrPageComponent />
      )}
    </div>
  );
}

export default App;

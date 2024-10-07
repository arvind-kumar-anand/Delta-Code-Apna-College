import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherinfo] = useState({
    name: "Delhi",
    temperature: 25,
    max_temperature: 25,
    min_temperature: 25,
    humidity: 58,
    weather: "haze",
  });

  // let updateInfo = (newInfo) => {
  //   setWeatherinfo(newInfo);
  // };
  let updateInfo = (newInfo) => {
    if (newInfo) {
      setWeatherinfo(newInfo);
    } else {
      console.error("Failed to update weather info.");
    }
  };

  return (
    <div>
      <h1> Weather App Made by &hearts; Arvind</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

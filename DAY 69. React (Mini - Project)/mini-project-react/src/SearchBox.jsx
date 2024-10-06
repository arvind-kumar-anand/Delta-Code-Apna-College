import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SeachBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "5cc26238edc88223d7e1a525e46e5557";

  let getWeatherInfo = async () => {
    // let response = await fetch(
    //   `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    // );
    // let jsonResponse = await response.json(response);
    // // console.log(jsonResponse);

    // let result = {
    //   name: jsonResponse.name,
    //   temperature: jsonResponse.main.temp,
    //   max_temperature: jsonResponse.main.temp_max,
    //   min_temperature: jsonResponse.main.temp_min,
    //   humidity: jsonResponse.main.humidity,
    //   weather: jsonResponse.weather[0].description,
    // };
    // console.log(result);
    // return result;

    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`City not found: ${response.status}`);
      }

      let jsonResponse = await response.json();
      let result = {
        name: jsonResponse.name,
        temperature: jsonResponse.main.temp,
        max_temperature: jsonResponse.main.temp_max,
        min_temperature: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching the weather data:", error);
      alert(
        "Failed to fetch weather data. Please check the city name and try again."
      );
      return null; // Return null or handle appropriately if no valid result
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    // updateInfo(newInfo);
    if (newInfo) {
      updateInfo(newInfo); // Only update if newInfo is not null
    } else {
      console.error("No weather data received.");
    }
  };

  return (
    <>
      <h3>Search By City Name</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="Submit">
          Search
        </Button>
      </form>
    </>
  );
}

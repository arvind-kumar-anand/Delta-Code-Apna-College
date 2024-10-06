import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // let info = {
  //   name: "Delhi",
  //   temperature: 25,
  //   max_temperature: 25,
  //   min_temperature: 25,
  //   humidity: 58,
  //   weather: "haze",
  // };

  let rainURL =
    "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hotURL =
    "https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let coldURL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <h2>Weather Information</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={
              info.humidity > 80
                ? rainURL
                : info.temperature > 15
                ? hotURL
                : coldURL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The weather in {info.name}{" "}
              {info.humidity > 80 ? (
                <BeachAccessIcon />
              ) : info.temperature > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p> The current temperature is {info.temperature}&deg;C</p>
              <p>
                Today is expected to reach a Maxiumum Temperature{" "}
                {info.max_temperature}&deg;C
              </p>
              <p>
                Today is expected to reach a Minimum Temperature{" "}
                {info.min_temperature}&deg;C
              </p>
              <p> The humidity is around {info.humidity}</p>
              <p> It's a {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

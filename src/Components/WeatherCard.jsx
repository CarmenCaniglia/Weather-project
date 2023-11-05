import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HourlyWeather from "./HourlyWeather";

const WeatherCard = ({ weatherData }) => {
  console.log(weatherData);
  const [showDetails, setShowDetails] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const imagesUrls = [
    "https://img.icons8.com/fluency/48/summer.png",
    "https://img.icons8.com/fluency/48/cloud.png",
    "https://img.icons8.com/fluency/48/heavy-rain.png",
    "https://img.icons8.com/fluency/96/partly-cloudy-rain.png",
    "https://img.icons8.com/fluency/48/snow.png",
  ];
  const seturl = (param) => {
    if (param === "Clear") {
      setImageUrl(imagesUrls[0]);
    } else if (param === "Clouds") {
      setImageUrl(imagesUrls[1]);
    } else if (param === "Rain") {
      setImageUrl(imagesUrls[2]);
    } else if (param === "Snow") {
      setImageUrl(imagesUrls[4]);
    } else if (param === "Mist") {
      setImageUrl(imagesUrls[3]);
    }
    return "";
  };

  useEffect(() => {
    if (weatherData && weatherData.weather[0].main) {
      seturl(weatherData.weather[0].main);
    }
  }, [weatherData]);

  return (
    <div>
      {weatherData && (
        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs={6} md={4} className="city py-4">
              <h1 className="city-name mb-4 fw-bold">
                {weatherData.name}, {weatherData.sys.country}{" "}
                <i className="bi bi-geo-alt fs-2"></i>
              </h1>
              {weatherData.weather[0].icon && (
                <img src={imageUrl} alt="Icona meteo" className="w-25" />
              )}
              <p className="text-white fs-2">
                {(weatherData.main.temp - 273.15).toFixed(0)}°
              </p>
              <p className="text-white ">
                {weatherData.weather[0].description}
              </p>
              <hr className="text-white"></hr>
              <div className="d-flex justify-content-evenly mt-4">
                <div>
                  <p className="text-white fs-4">
                    <i className="bi bi-droplet-half"></i>
                    {weatherData.main.humidity}%
                  </p>
                  <p className="text-white fs-4">
                    <i className="bi bi-wind"></i> {weatherData.wind.speed} m/s
                  </p>
                </div>
                <div>
                  <p className="text-white fs-4">
                    <i className="bi bi-thermometer-sun"></i>
                    {(weatherData.main.temp_max - 273.15).toFixed(0)}°
                  </p>
                  <p className="text-white fs-4">
                    <i className="bi bi-thermometer-snow"></i>
                    {(weatherData.main.temp_min - 273.15).toFixed(0)}°
                  </p>
                </div>
              </div>

              {/* <button onClick={() => setShowDetails(!showDetails)}>
                More Info
              </button>
              {showDetails && <HourlyWeather data={weatherData.hourly} />} */}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default WeatherCard;

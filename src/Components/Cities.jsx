import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cities = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const cities = ["Seattle", "Alaska", "Madrid", "Paris", "Tokyo", "New York"];
  const apiKey = "f407d07747f1198da6423e93b5e9a504";

  const fetchDataForCities = async () => {
    const dataPromises = cities.map(async (city) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
      );
      const cityData = await response.json();

      return cityData;
    });

    const cityDataArray = await Promise.all(dataPromises);
    setCitiesData(cityDataArray);
  };
  useEffect(() => {
    fetchDataForCities();
  }, []);

  useEffect(() => {
    const images = {
      Clear: "https://img.icons8.com/fluency/48/summer.png",
      Clouds: "https://img.icons8.com/fluency/48/cloud.png",
      Rain: "https://img.icons8.com/fluency/48/heavy-rain.png",
      Snow: "https://img.icons8.com/fluency/48/snow.png",
      Mist: "https://img.icons8.com/fluency/96/partly-cloudy-rain.png",
    };
    setImageUrl(images);
  }, []);

  return (
    <Container fluid>
      <Row className="Cities mt-5 d-flex justify-content-between">
        {citiesData.map((cityData, index) => (
          <Col key={index} xs={6} md={4} lg={2} className="card-container mb-4">
            <div className="CityCard d-flex flex-column align-items-center">
              <h4 className="city-name fw-bold pt-2">{cityData.name}</h4>
              <div className="d-flex align-items-center justify-content-center my-3">
                {cityData.weather[0].icon && (
                  <img
                    src={imageUrl[cityData.weather[0].main]}
                    alt="Icona meteo"
                  />
                )}
                <span className="text-white fs-2 ms-2">
                  {(cityData.main.temp - 273.15).toFixed(0)}°
                </span>
              </div>
              <p className="text-white ">{cityData.weather[0].description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cities;

import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const SearchBox = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const fetchData = async () => {
    if (city) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f407d07747f1198da6423e93b5e9a504`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error("Errore nella richiesta API:", response.status);
        }
      } catch (error) {
        console.error("Errore nella richiesta API:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        {/* <h1 className="text-center">Che tempo farà?</h1> */}

        <Col md={6} className=" d-flex justify-content-center">
          <Form onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="La tua città..."
              value={city}
              onChange={handleInputChange}
            />
          </Form>
          <i
            onClick={fetchData}
            className="bi bi-search fs-3 text-white fw-bold ms-3"
          ></i>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col me={6} className="text-center">
          <WeatherCard weatherData={weatherData} />
        </Col>
      </Row>
    </Container>
  );
};
export default SearchBox;

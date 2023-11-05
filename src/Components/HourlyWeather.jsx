const HourlyWeather = ({ data }) => {
  return (
    <div className="hourly-weather">
      {data &&
        data.map((hourlyData, index) => (
          <div key={index} className="hourly-card">
            <h3>Ora: {new Date(hourlyData.dt * 1000).getHours()}:00</h3>
            <img
              src={`https://openweathermap.org/img/w/${hourlyData.weather[0].icon}.png`}
              alt="Icona meteo"
            />
            <p>Temperatura: {(hourlyData.temp - 273.15).toFixed(0)}°C</p>
            <p>Condizione: {hourlyData.weather[0].description}</p>
          </div>
        ))}
    </div>
  );
};

export default HourlyWeather;

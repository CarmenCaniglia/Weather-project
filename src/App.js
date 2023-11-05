import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./Components/TopBar";
import SearchBox from "./Components/SearchBox";
import WeatherCard from "./Components/WeatherCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cities from "./Components/Cities";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<SearchBox />} />
          <Route path="/weather" element={<WeatherCard />} />
        </Routes>
        <Cities />
      </BrowserRouter>
    </>
  );
}

export default App;

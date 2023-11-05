import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../Components/assets/nuvoletta.png";

const TopBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="top-bar" data-bs-theme="dark">
      <Container>
        <img src={logo} alt="logo" className="logo" />
        <Link to="/" className="navbar-brand">
          WeatherCode
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/weather"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/weather"
            >
              Weather
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;

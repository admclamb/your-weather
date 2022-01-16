import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";
import { isObject } from "../helpers/isObject";
import NotFound from "../notFound";
import "./Navbar.css";

const Navbar = ({ setLocation, weather, tempConv }) => {
  const [city, setCity] = useState("");
  const handleChange = ({ target }) => {
    setCity(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(city);
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand">Weatherly</a>
            <div className="text-light d-flex ">
              <p className="me-2">
                {isObject(weather) ? weather.locationInfo[0].name + "," : ""}
              </p>
              <p>
                {isObject(weather)
                  ? tempConv(weather.weatherData.current.temp)
                  : ""}
              </p>
            </div>
          </div>

          <form className="d-flex input-group w-auto searchbar">
            <button
              className="input-group-text border-0 search-icon"
              id="search-addon"
              onClick={handleSubmit}
            >
              <i className="fas fa-search"></i>
            </button>
            <input
              type="search"
              className="form-control searchbar-search me-3 rounded-right"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={city}
              onChange={handleChange}
            />
            <Link to="/settings">
              <i className="fas fa-cog  fa-lg text-light mt-2"></i>
            </Link>
          </form>
        </div>
      </nav>
      <div className="container">
        <nav className="d-flex pt-3 ">
          <Link to="/" className="me-3 p-1">
            <h5>Home</h5>
          </Link>
          <Link to="/today" className="me-3 p-1">
            <h5>Today</h5>
          </Link>
          <Link to="/daily" className="me-3 p-1">
            <h5>Daily</h5>
          </Link>
          <Link to="/monthly" className="me-3 p-1">
            <h5>Monthly</h5>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getGeocoding } from "../api/getGeocoding";
import "./SearchForm.css";

const SearchForm = ({ setLocation }) => {
  const [city, setCity] = useState("");
  const [response, setResponse] = useState("");
  const handleChange = ({ target }) => {
    setCity(target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const geoLocation = await getGeocoding(setLocation, city);
    setCity("");
    setResponse(geoLocation);
  };

  return (
    <form className={"d-flex input-group w-auto searchbar" + " " + response}>
      <button
        className="input-group-text border-0 search-icon"
        id="search-addon"
        onClick={handleSubmit}
        type="submit"
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
        <i className="fas fa-sliders-h fa-lg text-light mt-2 pt-1"></i>
      </Link>
    </form>
  );
};

export default SearchForm;

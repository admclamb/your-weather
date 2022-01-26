import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getWeatherData } from "./api/getWeatherData";
import { getWeatherNews } from "./api/getWeatherNews";
import { getLocation } from "./api/getLocation";
import "./App.css";
import Layout from "./layout";
function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({ type: undefined });
  const [news, setNews] = useState({});
  const [tempScale, setTempScale] = useState("f");

  useEffect(() => {
    setWeather({});
    const abortController = new AbortController();
    getWeatherData(location, setWeather, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [location]);

  useEffect(() => {
    const abortController = new AbortController();
    getLocation(setLocation);
    getWeatherNews("us", setNews, abortController.signal);

    return () => {
      abortController.abort();
    };
  }, []);
  const tempConv = (temp) => {
    return tempScale === "f"
      ? (((temp - 273.15) * 9) / 5 + 32).toFixed(0) + "°F"
      : (temp - 273.15).toFixed(0) + "°C";
  };
  return (
    <div className="App">
      <Router>
        <Layout
          weather={weather}
          setLocation={setLocation}
          tempConv={tempConv}
          news={news}
        />
      </Router>
    </div>
  );
}

export default App;

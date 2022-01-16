import { Link } from "react-router-dom";
import Current from "../Current/Current";
import Forecast from "../Forecast/Forecast";
import NationalAlerts from "./NationalAlerts";
import "./Home.css";
import WeatherMap from "../map";
import Hourly from "../hourly";
import AirPollution from "../airPollution";
import NationalNews from "../nationalNews";
const Home = ({ weather, tempConv, news }) => {
  return (
    <main className="container">
      <NationalNews news={news} />
      <div className="row gx-5 home-grid">
        <section className="col col-12 col-md-8">
          <NationalAlerts />
          <Current weather={weather} tempConv={tempConv} />
          <Forecast weather={weather} tempConv={tempConv} />

          <Hourly weather={weather} tempConv={tempConv} />
        </section>
        <section className="col col-12 col-md-4 p-0">
          <AirPollution weather={weather} />
        </section>
      </div>
    </main>
  );
};
export default Home;
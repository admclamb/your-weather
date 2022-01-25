import { Link } from "react-router-dom";
import { isObject } from "../helpers/isObject";
import TodayCard from "./TodayCard";

const TommorrowForecast = ({ weather, tempConv }) => {
  console.log(weather);
  if (isObject(weather)) {
    return (
      <div className="border p-4 mt-3">
        <h6>Tomorrow's Weather forecast</h6>
        <TodayCard
          weatherOfDay={weather.weatherData.daily[1]}
          tempConv={tempConv}
        />
        <div className="d-flex justify-content-end">
          <Link to={"/"}>More info &rarr;</Link>
        </div>
      </div>
    );
  }
  return null;
};

export default TommorrowForecast;

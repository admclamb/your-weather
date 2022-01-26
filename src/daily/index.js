import Forecast from "../Forecast/Forecast";
import DisplayDay from "./DisplayDay";
import Current from "../Current/Current";
import DailyForecast from "./DailyForecast";
import { isObject } from "../helpers/isObject";
const Daily = ({ weather, tempConv }) => {
  if (!isObject(weather)) return null;
  return (
    <div className="container">
      <Current weather={weather} tempConv={tempConv} />
      <div className="row mb-3">
        <div className="col col-12 col-md-8">
          <DailyForecast weather={weather} tempConv={tempConv} />
        </div>
        <div className="col col-12 col-md-4"></div>
      </div>
    </div>
  );
};

export default Daily;

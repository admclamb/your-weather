import { Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route path={"/daily/:dailyId"}>
              <DisplayDay weather={weather} tempConv={tempConv} />
            </Route>
            <Route>
              <DailyForecast weather={weather} tempConv={tempConv} />
            </Route>
          </Switch>
        </div>
        <div className="col col-12 col-md-4"></div>
      </div>
    </div>
  );
};

export default Daily;

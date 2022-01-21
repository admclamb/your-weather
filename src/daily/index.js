import { Switch, Route } from "react-router-dom";
import Forecast from "../Forecast/Forecast";
import DisplayDay from "./DisplayDay";
import Current from "../Current/Current";
const Daily = ({ weather, tempConv }) => {
  return (
    <div className="container">
      <Current weather={weather} tempConv={tempConv} />
      <Switch>
        <Route path={"/daily/:dailyId"}>
          <DisplayDay weather={weather} tempConv={tempConv} />
        </Route>
      </Switch>
    </div>
  );
};

export default Daily;

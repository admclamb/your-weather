import { Switch, Route } from "react-router-dom";
import Forecast from "../Forecast/Forecast";
import DisplayDay from "./DisplayDay";
const Daily = ({ weather, tempConv }) => {
  return (
    <div className="container">
      <Forecast weather={weather} tempConv={tempConv} />
      <Switch>
        <Route path={"/daily/:dailyId"}>
          <DisplayDay />
        </Route>
      </Switch>
    </div>
  );
};

export default Daily;

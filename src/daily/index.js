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
        <div className="col col-12 col-md-4 border mt-3">
          <script
            src="https://s3-us-west-2.amazonaws.com/kaboodle/kaboodle.js"
            type="text/javascript"
          ></script>
        </div>
      </div>
    </div>
  );
};

export default Daily;

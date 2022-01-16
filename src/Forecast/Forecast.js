import { isObject } from "../helpers/isObject";
import DailyWeather from "./DailyWeather";

const Forecast = ({ weather, tempConv }) => {
  if (isObject(weather)) {
    const weatherPerDay = weather.weatherData.daily.map((day, index) => {
      return (
        <DailyWeather key={index} day={day} tempConv={tempConv} index={index} />
      );
    });
    return (
      <div className="border mt-3 p-3">
        <h5 className="mb-3">Daily</h5>
        <div className="d-flex justify-content-between">{weatherPerDay}</div>
      </div>
    );
  }
  return null;
};

export default Forecast;

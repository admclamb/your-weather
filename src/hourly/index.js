import { isObject } from "../helpers/isObject";
import DisplayHourly from "./DisplayHourly";

const Hourly = ({ weather, tempConv }) => {
  if (isObject(weather)) {
    // Get sunrise and sunset to tell if day or night
    const { sunrise, sunset } = weather.weatherData.current;
    return (
      <div className="border mt-3 p-3 bg-light">
        <h5 className="mb-3">Hourly</h5>
        <DisplayHourly
          hourly={weather.weatherData.hourly}
          tempConv={tempConv}
          sunrise={sunrise}
          sunset={sunset}
        />
      </div>
    );
  }
  return null;
};

export default Hourly;

import { Link } from "react-router-dom";
import { changeUnixToHHMM, changeUnixToHH } from "../helpers/changeUnixTime";
import { GetIcon } from "../helpers/GetIcon";
import { isDayTime } from "../helpers/isDayTime";
import { isObject } from "../helpers/isObject";
import Spinner from "../helpers/Spinner";

const Current = ({ weather, tempConv }) => {
  if (isObject(weather.weatherData)) {
    const { humidity, wind_gust, dt, sunrise, sunset } =
      weather.weatherData.current;
    const temp = tempConv(weather.weatherData.current.temp);
    const feels_like = tempConv(weather.weatherData.current.feels_like);
    const { id, main } = weather.weatherData.current.weather[0];
    const location = weather.locationInfo[0].name;
    return (
      <div className="border text-dark ps-4 pt-4 pe-4 pb-2 mt-3 bg-light">
        <div className="d-flex justify-content-between">
          <div style={{ width: "50%" }}>
            <div>
              <h6>{location}</h6>
              <p className="text-muted">{changeUnixToHH(dt)}</p>
            </div>
            <div className="d-flex align-items-center">
              <i
                className={GetIcon(id, "med", isDayTime(dt, sunrise, sunset))}
              ></i>
              <h3 className="display-3">{temp}</h3>
            </div>
          </div>
          <div style={{ width: "50%" }} className="mt-auto mb-auto">
            <div className="d-flex justify-content-between border-bottom pb-2">
              <h6>Feels Like</h6>
              <p>{feels_like}</p>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-2 pt-2">
              <h6>Humidity</h6>
              <p>{humidity}</p>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <h6>Wind</h6>
              <p>{wind_gust}</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <h6>{main}</h6>
          <Link to="/">More info &rarr;</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="border">
        <Spinner />
      </div>
    );
  }
};

export default Current;

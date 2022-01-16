import { Link } from "react-router-dom";
import { changeUnixToDay } from "../helpers/changeUnixTime";
import { GetIcon } from "../helpers/GetIcon";
const DailyWeather = ({ day, tempConv, index }) => {
  const { dt, temp, weather } = day;
  const { min, max } = temp;
  const { id } = weather[0];
  const theDay = changeUnixToDay(dt);
  // Get rid of the type of temp on the end
  const minTemp = tempConv(min).slice(0, -1);
  const maxTemp = tempConv(max).slice(0, -1);
  return (
    <Link
      to={`/daily/${index}`}
      className="d-flex flex-column align-items center text-center"
    >
      <p className="text-muted mb-3">{theDay}</p>
      <i className={GetIcon(id, "med", true)}></i>
      <div className="d-flex justify-content-center mt-2">
        <p className="me-1">{maxTemp}</p>
        <p className="text-muted">{minTemp}</p>
      </div>
    </Link>
  );
};

export default DailyWeather;

import { Link } from "react-router-dom";
import { changeUnixToHH } from "../helpers/changeUnixTime";
import { GetIcon } from "../helpers/GetIcon";
const HourlyDisplay = ({ hour, tempConv, sunrise, sunset }) => {
  const { dt, temp, weather, pop } = hour;
  const { id } = weather[0];
  const theHour = changeUnixToHH(dt);
  // Get rid of the type of temp on the end
  const formattedTemp = tempConv(temp);
  const isDay = dt > sunrise && dt < sunset;
  return (
    <Link
      to={`/`}
      className="d-flex flex-column align-items center text-center"
    >
      <p className="text-muted mb-1">{theHour}</p>
      <h4 className="mb-2">{formattedTemp}</h4>
      <i className={GetIcon(id, "med", isDay)}></i>
      <span className="text-muted mt-3">
        <i className="fas fa-tint fa-xs me-1"></i>
        {pop}%
      </span>
    </Link>
  );
};

export default HourlyDisplay;

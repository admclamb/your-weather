import { changeUnixToDay } from "../helpers/changeUnixTime";
import { rotate180 } from "../helpers/rotate180";
import { GetIcon } from "../helpers/GetIcon";
const DayCard = ({ dayWeather, tempConv, index }) => {
  if (!dayWeather) return null;
  console.log(dayWeather);
  let {
    dt,
    temp: { min, max, night },
    pop,
    wind_gust,
    weather,
    humidity,
    uvi,
    sunrise,
    sunset,
    moonrise,
    moonset,
    moon_phase,
  } = dayWeather;
  const { id, description } = weather[0];
  const day = changeUnixToDay(16431300000);
  min = tempConv(min);
  max = tempConv(max);

  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <p>day</p>
        <div>
          <h6>{max}</h6>
          <p className="text-muted">/ {min}</p>
        </div>
        <i className={GetIcon(id, "med", "yes")}></i>
        <button
          className="btn d-inline ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapseDetails" + index}
          aria-expanded="false"
          aria-controls="collapseDetails"
          onClick={rotate180}
        >
          <i class="fas fa-chevron-down rotateOriginal"></i>
        </button>
      </div>

      <div
        className={index === 0 ? "collapse.show" : "collapse"}
        id={"collapseDetails" + index}
      >
        <div className="">
          Besides basic Air Quality Index, the API returns data about polluting
          gases, such as Carbon monoxide (CO), Nitrogen monoxide (NO), Nitrogen
          dioxide (NO2), Ozone (O3), Sulphur dioxide (SO2), Ammonia (NH3), and
          particulates (PM2.5 and PM10).
        </div>
      </div>
    </>
  );
};

export default DayCard;

import { changeUnixToDay, changeUnixToHH } from "../helpers/changeUnixTime";
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
  sunrise = changeUnixToHH(sunrise);
  sunset = changeUnixToHH(sunset);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="d-flex align-items-center">
          <p className="me-4">{day}</p>
          <div className="d-flex align-items-center me-5">
            <h6 className="mt-1">{max}</h6>
            <p className="text-muted">/ {min}</p>
          </div>
          <i className={GetIcon(id, "sm", "yes")}></i>
          <p className="ms-5">{description}</p>
        </div>
        <button
          className="btn d-inline"
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
        <div className="d-flex flex-column border">
          <div className="d-flex border-bottom align-items-center justify-content-between">
            <div className="p-3 flex-1">
              <p>Humidity</p>
              <p>{humidity}</p>
            </div>
            <div className="p-3 flex-1">
              <p>UV index</p>
              <p>{uvi} out of 11</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="p-3">
              <p>Sunrise</p>
              <p>{sunrise}</p>
            </div>
            <div>
              <p>Sunset</p>
              <p>{sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayCard;

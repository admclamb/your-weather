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
    wind_speed,
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
      <div className="d-flex justify-content-between align-items-center p-2 ">
        <div className="d-flex align-items-center">
          <p className="me-4">{day}</p>
          <div className="d-flex align-items-center me-5">
            <h6 className="mt-1">{max}</h6>
            <p className="text-muted">/ {min}</p>
          </div>
          <i className={GetIcon(id, "sm", "yes")}></i>
          <p className="ms-5">{description}</p>
        </div>
        <div className="d-flex align-items-center">
          <div className="percipitation text-muted d-flex align-items-center me-3">
            <i className="fas fa-tint me-2"></i>
            <p>{pop}%</p>
          </div>
          <div className="wind text-muted">
            <i className="fas fa-wind me-2"></i>
            {wind_speed} MPH
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
            <i className="fas fa-chevron-down rotateOriginal"></i>
          </button>
        </div>
      </div>

      <div
        className={index === 0 ? "collapse.show" : "collapse"}
        id={"collapseDetails" + index}
      >
        <div className="">
          <p>{description}</p>
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-between border-bottom me-3 pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>UV Index</p>
              <p>{uvi}</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Percipitation</p>
              <p>{pop} %</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-between border-bottom me-3 pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Sunrise</p>
              <p>{sunrise}</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Wind Speed</p>
              <p>{wind_speed}</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-between border-bottom me-3 pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Sunset</p>
              <p>{sunset}</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Wind Gust</p>
              <p>{wind_gust}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayCard;

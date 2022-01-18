import { useEffect, useState } from "react/cjs/react.development";
import { getAirPollution } from "../api/getAirPollution";
import { isObject } from "../helpers/isObject";
import Spinner from "../helpers/Spinner";

const AirPollution = ({ weather }) => {
  const [airPollution, setAirPollution] = useState({});
  useEffect(() => {
    setAirPollution({});
    const abortController = new AbortController();
    if (isObject(weather)) {
      const { lat, lon } = weather.locationInfo[0];
      const coords = { lat, lon };
      getAirPollution(coords, setAirPollution, abortController.signal);
    }
    return () => {
      abortController.abort();
    };
  }, [weather]);
  if (isObject(weather) && airPollution.list) {
    const { aqi } = airPollution.list[0].main;
    let quality =
      aqi === 1 ? (
        <p className="text-success display-6">Good</p>
      ) : aqi === 2 ? (
        <p className="text-info display-6">Fair</p>
      ) : aqi === 3 ? (
        <p>Moderate</p>
      ) : aqi === 4 ? (
        <p className="text-warning display-6">Poor</p>
      ) : aqi === 5 ? (
        <p className="text-danger display-6">Very Poor</p>
      ) : (
        "Data Unavailable"
      );
    return (
      <div className="p-3 border">
        <h5>Air Quality</h5>
        <div className="p-4 text-center">{quality}</div>
      </div>
    );
  }
  return (
    <div className="p-3 border">
      <Spinner />
    </div>
  );
};

export default AirPollution;

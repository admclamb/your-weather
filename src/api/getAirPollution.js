import AirPollution from "../airPollution";

export async function getAirPollution(location, setPollution, signal) {
  // Location is a different than the original location state
  // this location is weather > locationInfo > lat and lon from this object
  try {
    const { lat, lon } = await location;
    const KEY = process.env.REACT_APP_OPEN_KEY;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${KEY}`,
      { signal }
    );
    const airPollutionData = await response.json();
    setPollution(airPollutionData);
  } catch (error) {
    throw error;
  }
}

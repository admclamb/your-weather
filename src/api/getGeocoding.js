import { isObject } from "../helpers/isObject";

// Gets lat and lon by using city name or area name.
export async function getGeocoding(setLocation, city) {
  try {
    const KEY = process.env.REACT_APP_OPEN_KEY;
    const limit = 5;
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${limit}&appid=${KEY}`
    );
    let location = await response.json();
    if (isObject(location)) {
      const { lat, lon } = location[0];
      setLocation({ type: "coords", lat, lon });
    } else {
      return "";
    }
    return "";
  } catch (error) {
    throw error;
  }
}

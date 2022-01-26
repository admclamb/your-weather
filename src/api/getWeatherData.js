export async function getWeatherData(location, setWeatherData, signal) {
  try {
    const { lat, lon } = await location;
    const KEY = process.env.REACT_APP_OPEN_KEY;
    let weatherData = {};
    let locationInfo = {};
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&unites=imperial&appid=${KEY}`,
      { signal }
    );
    weatherData = await response.json();
    // limit = number of the location in the API response
    const limit = 5;
    const newResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${KEY}`,
      { signal }
    );
    locationInfo = await newResponse.json();
    setWeatherData({ weatherData, locationInfo });
  } catch (error) {
    throw error;
  }
}

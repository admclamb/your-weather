export const getWeatherMap = async (
  layer = "percipitation_new",
  z = 1,
  x = 4,
  y = 4
) => {
  try {
    const { lat, lon } = await location;
    const KEY = process.env.REACT_APP_OPEN_KEY;
    let weatherData = {};
    let locationInfo = {};
    const response = await fetch(
      `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${KEY}`
    );
    weatherData = await response.json();
    return response;
  } catch (error) {
    throw error;
  }
};

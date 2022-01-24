// Gets lat and lon by using city name or area name.
export async function getdirectGeocoding(setLocation, city) {
  try {
    const KEY = process.env.REACT_APP_OPEN_KEY;
    const limit = 5;
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${limit}&appid=${KEY}`
    );
    let coords = await response.json();
    console.log(coords);
  } catch (error) {
    throw error;
  }
}

export function getLocation(setLocation) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        //geocoding
        setLocation({ type: "coord", lat, lon });
      },
      () => {
        setLocation({ type: "error", lat: null, lon: null });
      }
    );
  } else {
    //Handles no geolocation
  }
}

export const isDayTime = (time, sunrise, sunset) => {
  return time > sunrise && time < sunset;
};

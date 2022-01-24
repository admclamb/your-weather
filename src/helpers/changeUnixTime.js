import { type } from "@testing-library/user-event/dist/type";

export const changeUnixToHHMM = (unixTime) => {
  // multiply unix to get ms
  let date = new Date(Number(unixTime) * 1000);
  let hours = date.getHours();
  let minutes = Number("0" + date.getMinutes());
  if (hours > 12) {
    return hours + ":" + minutes - 12 + "PM";
  } else {
    return hours + ":" + minutes + "Am";
  }
};

export const changeUnixToHH = (unixTime) => {
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  if (hours > 12) {
    return hours - 12 + "PM";
  } else if (hours === 0) {
    return 12 + "AM";
  } else {
    return hours + "AM";
  }
};

export const changeUnixToDay = (unixTime) => {
  let date = new Date(Number(unixTime) * 1000);
  const day = date.getDay();
  let dayName;
  switch (day) {
    case 0:
      dayName = "Mon";
      break;
    case 1:
      dayName = "Tue";
      break;
    case 2:
      dayName = "Wed";
      break;
    case 3:
      dayName = "Thu";
      break;
    case 4:
      dayName = "Fri";
      break;
    case 5:
      dayName = "Sat";
      break;
    case 6:
      dayName = "Sun";
      break;
    default:
      dayName = "Und";
      break;
  }
  return dayName;
};

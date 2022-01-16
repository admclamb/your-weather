export const GetIcon = (ID, size = "med", isDayTime) => {
  // Use the id of the weather to determine what type of weather it is
  let iconClass = "";
  switch (true) {
    case ID < 233:
      iconClass = "fa-bolt";
      break;
    case ID < 322:
      iconClass = "fa-cloud-rain";
      break;
    case ID < 532:
      iconClass = "fa-cloud-showers-heavy";
      break;
    case ID < 622:
      iconClass = "fa-snowflake";
      break;
    case ID < 782:
      iconClass = "atmosphere";
      break;
    case ID < 801 && isDayTime:
      iconClass = "fa-sun";
      break;
    case ID < 801:
      iconClass = "fa-moon";
    default:
      iconClass = "fa-cloud";
      break;
  }
  let iconSize = "med" ? "fa-3x" : "fa-6x";
  return "fas" + " " + iconClass + " " + iconSize;
};

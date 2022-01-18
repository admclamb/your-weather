import HourlyDisplay from "./HourlyDisplay";

const DisplayHourly = ({ hourly, tempConv, sunrise, sunset }) => {
  // making sure to only get the next 5 days
  const hourlyArr = hourly.map((hour, index) => {
    if (index < 6) {
      return (
        <HourlyDisplay
          hour={hour}
          tempConv={tempConv}
          sunrise={sunrise}
          sunset={sunset}
          key={index}
        />
      );
    }
  });

  return <div className="d-flex justify-content-between">{hourlyArr}</div>;
};

export default DisplayHourly;

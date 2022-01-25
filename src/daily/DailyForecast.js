import DayCard from "./DayCard";

const DailyForecast = ({ weather, tempConv }) => {
  console.log(weather);
  const { daily } = weather.weatherData;
  console.log(daily);
  const dailyWeatherArr = daily.map((day, index) => {
    return (
      <div key={index} className="border p-3 mt-3">
        <DayCard dayWeather={day} tempConv={tempConv} index={index} />
      </div>
    );
  });
  return <div>{dailyWeatherArr}</div>;
};

export default DailyForecast;

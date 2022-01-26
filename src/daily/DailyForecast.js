import DayCard from "./DayCard";

const DailyForecast = ({ weather, tempConv }) => {
  const { daily } = weather.weatherData;
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

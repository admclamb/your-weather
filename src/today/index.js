import Current from "../Current/Current";
import Hourly from "../hourly";
import TodayForecast from "./TodayForecast";
import NationalNewsWidget from "../nationalNews/NationalNewsWidget";
import TonightForecast from "./TonightForecast";
import TommorrowForecast from "./TomorrowsForecast";
import AirPollution from "../airPollution";
const Today = ({ weather, tempConv, news }) => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12 col-md-8">
          <Current weather={weather} tempConv={tempConv} />
          <TodayForecast weather={weather} tempConv={tempConv} />
          <TonightForecast weather={weather} tempConv={tempConv} />
          <TommorrowForecast weather={weather} tempConv={tempConv} />
        </div>
        <div className="col-12 col-md-4">
          <NationalNewsWidget news={news} />
          <div className="mt-3">
            <AirPollution weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;

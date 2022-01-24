import Current from "../Current/Current";
import Hourly from "../hourly";
import NationalNewsWidget from "../nationalNews/NationalNewsWidget";

const Today = ({ weather, tempConv, news }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <Current weather={weather} tempConv={tempConv} />
          <Hourly weather={weather} tempConv={tempConv} />
        </div>
        <div className="col-12 col-md-4">
          <NationalNewsWidget news={news} />
        </div>
      </div>
    </div>
  );
};

export default Today;

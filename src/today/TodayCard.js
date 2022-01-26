import { GetIcon } from "../helpers/GetIcon";

const TodayCard = ({ weatherOfDay, tempConv }) => {
  const {
    theDay,
    id,
    temp: { max, min },
    weather,
  } = weatherOfDay;
  const { description } = weather[0];
  return (
    <div className="d-flex align-items-center">
      <i className={GetIcon(id, "med", true) + " " + "me-4 ms-5"}></i>
      <div className="d-flex  justify-content-center">
        <h3 className="me-1 display-1">{tempConv(max)}</h3>
        <h3 className="text-muted mt-5">{tempConv(min)}</h3>
      </div>
      <h6 className="ms-5">{description}</h6>
    </div>
  );
};

export default TodayCard;

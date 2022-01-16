import { useParams } from "react-router-dom";

const DisplayDay = ({ weather }) => {
  const { dailyId } = useParams();
  return <h1>{dailyId}</h1>;
};

export default DisplayDay;

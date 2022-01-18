import { isObject } from "../helpers/isObject";
import Spinner from "../helpers/Spinner";

const NationalNewsWidget = ({ news }) => {
  if (!isObject(news) && news.status !== "ok") return <Spinner />;
  const { author, title, url, urlToImage } = news.articles[4];
  return (
    <div className="border p-3">
      <h5>{title}</h5>
      <img src={urlToImage} alt={title} width="100%" />
    </div>
  );
};

export default NationalNewsWidget;

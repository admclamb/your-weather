import { isObject } from "../helpers/isObject";
import Spinner from "../helpers/Spinner";

const NationalNewsWidget = ({ news }) => {
  if (!isObject(news) && news.status !== "ok") return <Spinner />;
  const { author, title, url, urlToImage } = news.articles[4];
  return (
    <div className="border p-3 mt-3 bg-light">
      <h5 className="mb-4">{title}</h5>
      <img src={urlToImage} alt={title} width="100%" />
      <div className="d-flex justify-content-between mt-2">
        <p className="text-muted">By: {author}</p>
        <a href={url} target="_blank">
          Click here for more &rarr;
        </a>
      </div>
    </div>
  );
};

export default NationalNewsWidget;

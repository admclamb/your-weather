import { isObject } from "../helpers/isObject";

const NationalNews = ({ news }) => {
  console.log(news);
  if (isObject(news) && news.status === "ok") {
    const { articles } = news;
    const { author, title, description, source, urlToImage, url } = articles[0];

    return (
      <div
        className="jumbotron d-flex flex-column justify-content-center p-4 mb-4"
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${urlToImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "40vh",
        }}
      >
        <h6 className="display-6 text-light">{title}</h6>
        <p className="lead mt-3 text-light">{description}</p>
      </div>
    );
  }
  return null;
};

export default NationalNews;

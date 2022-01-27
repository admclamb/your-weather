import { useState } from "react/cjs/react.development";
import { isObject } from "../helpers/isObject";

const NationalNews = ({ news }) => {
  if (!isObject(news) && news.status !== "ok") return null;

  const { articles } = news;
  let currentArticle = articles[0];
  let { author, title, description, source, urlToImage, url } = currentArticle;
  return (
    <div
      className="jumbotron-fluid d-flex flex-column justify-content-center p-4 mb-4"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${urlToImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
        height: "40vh",
      }}
    >
      <h6 className="display-6 text-light mt-5">{title}</h6>
      <p className="lead mt-3 text-light">{description}</p>
      <div className="d-flex mt-auto justify-content-between">
        <p className="text-light">By: {author}</p>
        <a href={url} className="text-light" target="_blank">
          Click here for more &rarr;
        </a>
      </div>
    </div>
  );
};

export default NationalNews;

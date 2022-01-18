import { isObject } from "../helpers/isObject";

const NationalNews = ({ news }) => {
  if (!isObject(news) && news.status !== "ok") return null;
  const { articles } = news;
  // const { author, title, description, source, urlToImage, url } = articles[0];
  const carouselItems = articles.map((article, index) => {
    const { author, title, description, source, urlToImage, url } = article;
    return (
      index < 6 && (
        <div
          className={index === 0 ? "carousel-item active" : "carousel-item"}
          key={index}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${urlToImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "cover",
            height: "40vh",
          }}
        >
          <h6>{title}</h6>
          <p>{description}</p>
          <div>
            <p>Author: {author}</p>
            <a href={url}>Click here for more</a>
          </div>
        </div>
      )
    );
  });

  const carouselIndicators = carouselItems.forEach((article, index) => {
    return (
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to={index}
        className={index === 0 ? "active" : ""}
      ></li>
    );
  });

  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" >
        <h6>{title}</h6>
        <p>{description}</p>
        <div>
        <p>Author: {author}</p>
        <a href={url}>Click here for more</a>
      </div>
      </div>
      <div class="carousel-item" >
        <h6>{title}</h6>
        <p>{description}</p>
        <div>
        <p>Author: {author}</p>
        <a href={url}>Click here for more</a>
      </div>
      <div class="carousel-item" >
        <h6>{title}</h6>
        <p>{description}</p>
        <div>
        <p>Author: {author}</p>
        <a href={url}>Click here for more</a>
      </div>
      <div class="carousel-item" >
        <h6>{title}</h6>
        <p>{description}</p>
        <div>
        <p>Author: {author}</p>
        <a href={url}>Click here for more</a>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  );
  //   return (
  //     <div
  //       className="jumbotron-fluid d-flex flex-column justify-content-center p-4 mb-4"
  //       style={{
  //         background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${urlToImage})`,
  //         backgroundRepeat: "no-repeat",
  //         backgroundPosition: "top",
  //         backgroundSize: "cover",
  //         height: "40vh",
  //       }}
  //     >
  //       <h6 className="display-6 text-light">{title}</h6>
  //       <p className="lead mt-3 text-light">{description}</p>
  //     </div>
  //   );
  // }
};

export default NationalNews;

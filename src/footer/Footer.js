import BreadCrumbFooter from "./BreadCrumbFooter";
import "./Footer.css";
const Footer = ({ weather }) => {
  return (
    <footer className="footer">
      <BreadCrumbFooter weather={weather} />
      <section className="footer-main">
        <div className="container pt-5 pb-5 d-flex justify-content-start">
          <div className="credit me-4">
            <h6>THIS IS A MOCK APP</h6>
            <p>
              This is a MOCK WEBSITE. All credit goes to{" "}
              <a href="https://openweathermap.org/" className="links-tag">
                OpenWeather
              </a>{" "}
              for all weather data. Credit also goes to{" "}
              <a href="https://newsapi.org/" className="links-tag">
                NewsApi
              </a>{" "}
              for providing news to demonstrate a great landing page.
            </p>
          </div>
          <div className="links">
            <h6>Links</h6>
            <ul>
              <li className="mb-2">
                <a href="#">OpenWeatherApi</a>
              </li>
              <li className="mb-2">
                <a href="#">NewsApi</a>
              </li>
              <li className="mb-2">
                <a href="#">My Github</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="text-center p-3 bg-dark text-light">
        Website Made with ❤
      </div>
    </footer>
  );
};

export default Footer;

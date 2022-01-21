import { isObject } from "../helpers/isObject";
import "./BreadCrumbFooter.css";
const BreadCrumbFooter = ({ weather }) => {
  if (!isObject(weather)) return null;
  const { country, state, name } = weather.locationInfo[0];
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-footer p-3">
      <div className="container">
        <ol class="breadcrumb text-light">
          <li class="breadcrumb-item">{country}</li>
          <li class="breadcrumb-item" aria-current="page">
            {state}
          </li>
          <li class="breadcrumb-item" aria-current="page">
            {name}
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default BreadCrumbFooter;

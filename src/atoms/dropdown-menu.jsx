import { Link } from "react-router-dom";
import { useState } from "react";
const DropDownMenu = ({ menuText, movieList }) => {
  const [isActive, setActive] = useState(false);

  const toggleClassName = () => {
    setActive((current) => !current);
  };

  return (
    <div
      className={isActive ? "c-dropdown is-open" : "c-dropdown"}
      style={{ float: "right" }}
    >
      <button
        id="dropdown1"
        className="c-dropdown__toggle"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={toggleClassName}
      >
        {menuText}
      </button>
      <ul className="c-dropdown__list" aria-labelledby="dropdown1">
        {movieList &&
          movieList.map((movie, index) => {
            return (
              <li
                className="c-dropdown__item"
                key={`${movie.name}-dropdown-${index}`}
              >
                <Link
                  className="c-dropdown__link"
                  to={`/movie-visualisation/${movie.name}`}
                  state={{ movieDetails: movie }}
                  onClick={toggleClassName}
                >
                  {movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DropDownMenu;

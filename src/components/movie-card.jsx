import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <article className="c-tile c-tile--square c-tile--full">
      <Link
        className="c-tile__link c-shine-context"
        to={`/movie-visualisation/${movie.name}`}
        state={{ movieDetails: movie }}
      >
        <div className="c-tile__content">
          <div className="c-tile__media">
            <div className="c-bezel">
              <img
                alt={`${movie?.name} movie poster`}
                className="c-tile__poster"
                src={movie?.assetImage}
              />
            </div>
          </div>
          <div className="c-tile__body">
            <div className="c-tile__overlay">
              <p className="c-tile__title c-heading-delta">{movie?.name}</p>
            </div>
          </div>
        </div>
        <div className="c-tile__shine c-tile__shine--top c-shine">
          <div className="c-shine__rail"></div>
        </div>
        <div className="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
          <div className="c-shine__rail"></div>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;

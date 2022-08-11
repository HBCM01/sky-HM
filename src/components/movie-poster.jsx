const MoviePoster = ({ title, image }) => {
  return (
    <div className="c-bezel">
      <img
        alt={`${title} movie poster`}
        className="c-tile__poster"
        src={image}
      />
    </div>
  );
};

export default MoviePoster;

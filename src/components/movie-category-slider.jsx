import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
import MovieCard from "./movie-card";

const MovieCategorySlider = ({ movies, category }) => {
  const categoryMovies = movies.filter((m) => m.genre.includes(category));

  let slides = [];

  categoryMovies.map((movie, index) => {
    slides.push(
      <SwiperSlide key={`${movie.name}-slider-${index}`}>
        <MovieCard movie={movie} />
      </SwiperSlide>
    );
  });

  const navigateToMovie = () => {};

  return (
    <>
      <Swiper
        id={"movie-slider"}
        modules={(Navigation, EffectFade, [Thumbs])}
        effect
        speed={800}
        slidesPerView={3}
        onClick={navigateToMovie}
      >
        {slides}
      </Swiper>
    </>
  );
};

export default MovieCategorySlider;

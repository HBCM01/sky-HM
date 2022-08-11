import { useEffect } from "react";
import getContentData from "../api/content-data";
import useApiCall from "../hooks/use-api-call";
import ApiStaeHandler from "../components/api-state-handler";
import { useContext } from "react";
import MovieCategoryHeader from "../atoms/movie-category-header";
import { movieCategories } from "../utils/strings/strings";
import MovieCategorySlider from "../components/movie-category-slider";
import { MovieContext } from "../store/movie-context";
// TO DO
// Tests
//  ReadMe

const Homepage = () => {
  const [loading, data, error] = useApiCall(getContentData);
  const { setMovieData } = useContext(MovieContext);
  const movieHeaders = Object.keys(movieCategories);
  useEffect(() => {
    setMovieData(data);
  }, [data]);
  return (
    <div className="App">
      <ApiStaeHandler loading={loading} error={error}>
        {data && (
          <div className="o-container">
            {movieHeaders.map((movieCat, index) => (
              <>
                <MovieCategoryHeader
                  key={`movie-header-${movieCat}-${index}`}
                  text={movieCat}
                />
                <MovieCategorySlider
                  key={`movie-category-slider-${index}`}
                  category={movieCat}
                  movies={data?.data}
                />
              </>
            ))}
          </div>
        )}
      </ApiStaeHandler>
    </div>
  );
};

export default Homepage;

import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FilmViewBarChart from "../components/film-view-bar-chart";
import ViewingHoursByDate from "../components/date-line-chart";
import DropDownMenu from "../atoms/dropdown-menu";
import PageHeader from "../atoms/page-header";
import MoviePoster from "../components/movie-poster";
import useApiCall from "../hooks/use-api-call";
import getTimeData from "../api/time-data";
import ApiStaeHandler from "../components/api-state-handler";
import { MovieContext } from "../store/movie-context";

const MovieVisualisation = () => {
  const [loading, data, error] = useApiCall(getTimeData);
  const {
    state: { movieDetails = [] },
  } = useLocation();
  const {
    state: {
      data: { data: movieData },
    },
  } = useContext(MovieContext);

  return (
    <div className="o-container ">
      <ApiStaeHandler loading={loading} error={error}>
        {data && (
          <>
            <div className="u-margin-top">
              <Link to="/">
                <button className="c-link text-body" aria-label="Home button">
                  Back to Home
                </button>
              </Link>
              <DropDownMenu menuText={"Other Movies"} movieList={movieData} />
            </div>
            <PageHeader text={`Viewing data for ${movieDetails?.name}`} />
            <div className=".o-layout--[middle|bottom]] margin-all">
              <div className="o-layout__item u-width-1/2">
                <MoviePoster
                  title={movieDetails?.name}
                  image={movieDetails?.assetImage}
                />
              </div>
              <div className="o-layout__item u-width-1/2">
                <article className="c-tile movie-description">
                  <div className="c-tile__content">
                    <p className="c-tile__title c-heading-delta">{`${movieDetails?.name}`}</p>
                    <p className="c-text-body">{`${movieDetails?.description}`}</p>
                    <p className="c-text-body">{`${movieDetails?.provider}`}</p>
                  </div>
                </article>
              </div>
              <div
                className="o-layout__item u-vertical-align-parent u-margin-bottom-large u-margin-top"
                style={{ height: "200px" }}
              >
                <FilmViewBarChart movie={movieDetails} />
              </div>
              <div
                className="o-layout__item u-vertical-align-parent u-margin-top-large"
                style={{ height: "200px", marginTop: "80px" }}
              >
                <ViewingHoursByDate dateData={data?.data} />
              </div>
            </div>
          </>
        )}
      </ApiStaeHandler>
    </div>
  );
};

export default MovieVisualisation;

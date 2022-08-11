import React, { createContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useState({});
  const setMovieData = (data) => {
    dispatch({ ...state, data });
  };

  return (
    <MovieContext.Provider value={{ setMovieData, state }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };

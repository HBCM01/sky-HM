import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import NavBar from "./components/nav-bar";
import MovieVisualisation from "./pages/movie-visualisation";
import { MovieProvider } from "./store/movie-context";

function App() {
  return (
    <>
      <MovieProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route
              path="/movie-visualisation/:movieName"
              element={<MovieVisualisation />}
            />
          </Routes>
        </Router>
      </MovieProvider>
    </>
  );
}

export default App;

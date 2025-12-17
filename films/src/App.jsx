import React from "react";
import { MovieProvider } from "./context/MovieContext";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <MovieProvider>
      <div style={{ padding: "20px" }}>
        <h1>Movie Watchlist Manager</h1>
        <MovieForm />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;

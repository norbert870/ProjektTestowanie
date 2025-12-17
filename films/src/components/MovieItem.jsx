import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieItem = ({ movie }) => {
  const { removeMovie } = useContext(MovieContext);

  return (
    <li>
      {movie.title}{" "}
      <button onClick={() => removeMovie(movie.id)}>Usuń</button>
    </li>
  );
};

export default MovieItem;
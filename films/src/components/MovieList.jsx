import React, { useState } from "react";
import { useMovies } from "../context/MovieContext";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const { movies, movieCount } = useMovies();
  const [filter, setFilter] = useState("");

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (movies.length === 0) return <p>Brak filmów na liście.</p>;

  return (
    <div>
      <input
        placeholder="Filtruj filmy"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <p>Liczba filmów: {movieCount}</p>
      <ul>
        {filteredMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

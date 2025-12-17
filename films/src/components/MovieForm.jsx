import React, { useState } from "react";
import { useMovies } from "../context/MovieContext";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const { addMovie, error } = useMovies();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Wpisz tytuł filmu"
      />
      <button type="submit">Dodaj</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
};

export default MovieForm;

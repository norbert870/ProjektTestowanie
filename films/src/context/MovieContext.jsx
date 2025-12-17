import React, { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/movies");
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      setError("Błąd pobierania filmów");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const addMovie = async (title) => {
    if (!title || title.trim() === "") {
      setError("Tytuł filmu nie może być pusty");
      return;
    }
    try {
      const res = await fetch("http://localhost:4000/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const newMovie = await res.json();
      setMovies((prev) => [...prev, newMovie]);
      setError(null);
    } catch (err) {
      setError("Błąd dodawania filmu");
    }
  };

  const removeMovie = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/movies/${id}`, { method: "DELETE" });
      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      setError("Błąd usuwania filmu");
    }
  };

  const movieCount = movies.length;

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, removeMovie, setMovies, error, movieCount }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovies must be used within MovieProvider");
  return context;
};

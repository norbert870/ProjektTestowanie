import { useEffect, useState } from "react";
import { api } from "../api";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  async function loadMovies() {
    const res = await api.get("/movies");
    setMovies(res.data);
  }

  async function addMovie() {
    if (!title.trim()) return;
    await api.post("/movies", { title });
    setTitle("");
    loadMovies();
  }

  async function deleteMovie(id) {
    await api.delete(`/movies/${id}`);
    loadMovies();
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <h2>Twoje filmy</h2>

      <div>
        <input
          placeholder="Tytuł filmu"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button onClick={addMovie}>Dodaj</button>
      </div>

      <ul>
        {movies.map(movie => (
          <li key={movie.id} style={{ margin: "8px 0" }}>
            {movie.title}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => deleteMovie(movie.id)}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { initDb } from "../db.js";

// pobierz wszystkie filmy
export const getMovies = async (req, res) => {
  const db = await initDb();
  const movies = await db.all("SELECT * FROM movies");
  res.json(movies);
};

// dodaj nowy film
export const addMovie = async (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  const db = await initDb();
  const result = await db.run("INSERT INTO movies (title) VALUES (?)", [title]);
  const newMovie = await db.get("SELECT * FROM movies WHERE id = ?", [result.lastID]);
  res.status(201).json(newMovie);
};

// usuń film po ID
export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const db = await initDb();
  const movie = await db.get("SELECT * FROM movies WHERE id = ?", [id]);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  await db.run("DELETE FROM movies WHERE id = ?", [id]);
  res.json(movie);
};

const API_URL = "http://localhost:4000/api/movies";

export const fetchMovies = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addMovie = async (title) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
  return res.json();
};

export const deleteMovie = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
};
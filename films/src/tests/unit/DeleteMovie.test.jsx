test("deleteMovie wywołuje fetch z metodą DELETE", async () => {
  global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
  const { deleteMovie } = await import("../../services/MovieService");

  await deleteMovie(1);
  expect(fetch).toHaveBeenCalledWith("http://localhost:4000/api/movies/1", { method: "DELETE" });
});

test("fetchMovies zwraca filmy z API", async () => {
  global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve([{ id: 1, title: "Matrix" }]) }));
  const { fetchMovies } = await import("../../services/MovieService");

  const movies = await fetchMovies();
  expect(movies).toEqual([{ id: 1, title: "Matrix" }]);
});

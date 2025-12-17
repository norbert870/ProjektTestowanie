test("addMovie zwraca nowy film", async () => {
  global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({ id: 1, title: "Matrix" }) }));
  const { addMovie } = await import("../../services/MovieService");

  const movie = await addMovie("Matrix");
  expect(movie).toEqual({ id: 1, title: "Matrix" });
});

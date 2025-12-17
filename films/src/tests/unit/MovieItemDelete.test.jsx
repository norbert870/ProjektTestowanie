import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from 'vitest';
import { MovieContext } from '../../context/MovieContext';
import MovieItem from '../../components/MovieItem';

test("MovieItem usuwa film po kliknięciu", () => {
  const removeMovie = vi.fn();
  const movie = { id: 1, title: "Matrix" };

  render(
    <MovieContext.Provider value={{ removeMovie }}>
      <MovieItem movie={movie} />
    </MovieContext.Provider>
  );

  fireEvent.click(screen.getByText("Usuń"));
  expect(removeMovie).toHaveBeenCalledWith(1);
});

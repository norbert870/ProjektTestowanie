import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from 'vitest';
import { MovieContext } from '../../context/MovieContext';
import MovieForm from '../../components/MovieForm';

test("MovieForm dodaje film i czyści input", () => {
  const addMovie = vi.fn();
  render(
    <MovieContext.Provider value={{ addMovie }}>
      <MovieForm />
    </MovieContext.Provider>
  );

  const input = screen.getByPlaceholderText("Wpisz tytuł filmu");
  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(screen.getByText("Dodaj"));

  expect(addMovie).toHaveBeenCalledWith("Matrix");
  expect(input.value).toBe("");
});

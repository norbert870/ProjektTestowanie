import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from 'vitest';
import MovieForm from '../../components/MovieForm';
import { MovieContext } from '../../context/MovieContext';

test("MovieForm pokazuje błąd przy pustym tytule", () => {
  const addMovie = vi.fn();
  render(
    <MovieContext.Provider value={{ addMovie, error: "Tytuł filmu nie może być pusty" }}>
      <MovieForm />
    </MovieContext.Provider>
  );

  fireEvent.click(screen.getByText("Dodaj"));
  expect(screen.getByRole("alert")).toHaveTextContent("Tytuł filmu nie może być pusty");
});

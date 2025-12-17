import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from 'vitest';
import { MovieContext } from '../../context/MovieContext';
import MovieList from "../../components/MovieList";

test("MovieList filtruje listę filmów", () => {
  const movies = [
    { id: 1, title: "Matrix" },
    { id: 2, title: "Inception" },
  ];

  render(
    <MovieContext.Provider value={{ movies, movieCount: movies.length }}>
      <MovieList />
    </MovieContext.Provider>
  );

  fireEvent.change(screen.getByPlaceholderText("Filtruj filmy"), { target: { value: "Matrix" } });
  expect(screen.getByText("Matrix")).toBeInTheDocument();
  expect(screen.queryByText("Inception")).toBeNull();
});

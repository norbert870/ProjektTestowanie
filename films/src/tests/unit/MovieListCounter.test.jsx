import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from 'vitest';
import { MovieContext } from '../../context/MovieContext';
import MovieList from "../../components/MovieList";

test("MovieList pokazuje filmy i licznik", () => {
  const movies = [
    { id: 1, title: "Matrix" },
    { id: 2, title: "Inception" },
  ];

  render(
    <MovieContext.Provider value={{ movies, movieCount: movies.length }}>
      <MovieList />
    </MovieContext.Provider>
  );

  expect(screen.getByText("Matrix")).toBeInTheDocument();
  expect(screen.getByText("Inception")).toBeInTheDocument();
  expect(screen.getByText("Liczba filmów: 2")).toBeInTheDocument();
});

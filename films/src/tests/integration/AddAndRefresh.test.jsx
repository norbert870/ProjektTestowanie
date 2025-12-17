import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MovieProvider } from "../../context/MovieContext";
import MovieForm from "../../components/MovieForm";
import MovieList from "../../components/MovieList";
import { vi } from "vitest";

global.fetch = vi.fn((url, options) => {
  if (options?.method === "POST") {
    return Promise.resolve({
      json: () => Promise.resolve({ id: Date.now(), title: JSON.parse(options.body).title }),
    });
  }
  if (options?.method === "GET") {
    return Promise.resolve({
      json: () => Promise.resolve([]),
    });
  }
  if (options?.method === "DELETE") {
    return Promise.resolve({ json: () => Promise.resolve({}) });
  }
  return Promise.resolve({ json: () => Promise.resolve([]) });
});

test('dodanie filmu przez MovieForm aktualizuje MovieList', async () => {
  render(
    <MovieProvider>
      <MovieForm />
      <MovieList />
    </MovieProvider>
  );

  const input = screen.getByPlaceholderText('Wpisz tytuł filmu');
  const button = screen.getByText('Dodaj');

  // Act
  fireEvent.change(input, { target: { value: 'Matrix' } });
  fireEvent.click(button);

  // Assert
  await waitFor(() => {
    expect(screen.getByText('Matrix')).toBeInTheDocument();
  });
});

test('MovieItem można usunąć z listy', async () => {
  // Arrange
  render(
    <MovieProvider>
      <MovieForm />
      <MovieList />
    </MovieProvider>
  );

  const input = screen.getByPlaceholderText('Wpisz tytuł filmu');
  const addButton = screen.getByText('Dodaj');

  // Act: dodajemy film
  fireEvent.change(input, { target: { value: 'Inception' } });
  fireEvent.click(addButton);

  // Act: usuwamy film
  const removeButton = await screen.findByText('Usuń');
  fireEvent.click(removeButton);

  // Assert
  await waitFor(() => {
    expect(screen.queryByText('Inception')).not.toBeInTheDocument();
  });
});

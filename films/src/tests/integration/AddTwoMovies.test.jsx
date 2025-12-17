import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { afterEach, test, vi, beforeEach } from 'vitest';
import { MovieProvider } from '../../context/MovieContext';
import MovieForm from '../../components/MovieForm';
import MovieList from '../../components/MovieList';

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

beforeEach(() => {
  global.fetch = vi.fn((url, options) => {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body);
      return Promise.resolve({ json: () => Promise.resolve({ id: Date.now(), title: body.title }) });
    }
    return Promise.resolve({ json: () => Promise.resolve([]) });
  });
});

test('dodanie dwóch różnych filmów aktualizuje listę', async () => {
  // Arrange
  render(
    <MovieProvider>
      <MovieForm />
      <MovieList />
    </MovieProvider>
  );

  const input = screen.getByPlaceholderText('Wpisz tytuł filmu');
  const addButton = screen.getByText('Dodaj');

  // Act
  fireEvent.change(input, { target: { value: 'Matrix' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Inception' } });
  fireEvent.click(addButton);

  // Assert
  await waitFor(() => {
    expect(screen.getAllByText('Matrix').length).toBe(1);
    expect(screen.getAllByText('Inception').length).toBe(1);
  });
});

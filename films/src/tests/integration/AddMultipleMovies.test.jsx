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

test('dodawanie kilku filmów po kolei aktualizuje listę', async () => {
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
  const movies = ['Matrix', 'Inception', 'Avatar'];
  for (const title of movies) {
    fireEvent.change(input, { target: { value: title } });
    fireEvent.click(addButton);
  }

  // Assert
  await waitFor(() => {
    movies.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});

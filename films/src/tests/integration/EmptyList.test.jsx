import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, test } from 'vitest';
import { MovieProvider } from '../../context/MovieContext';
import MovieList from '../../components/MovieList';

afterEach(() => {
  cleanup();
});

test('lista filmów renderuje komunikat gdy jest pusta', () => {
  render(
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );

  expect(screen.getByText('Brak filmów na liście.')).toBeInTheDocument();
});

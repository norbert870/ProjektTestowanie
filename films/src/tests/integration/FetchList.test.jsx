import { render, screen } from '@testing-library/react';
import { MovieProvider } from '../../context/MovieContext';
import MovieList from '../../components/MovieList';

test('MovieList renderuje filmy pobrane z API', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, title: 'Inception' }]),
    })
  );

  render(
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );

  const movieItem = await screen.findByText('Inception');
  expect(movieItem).toBeInTheDocument();
});

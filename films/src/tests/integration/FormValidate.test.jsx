import { render, screen, fireEvent } from '@testing-library/react';
import { MovieProvider } from '../../context/MovieContext';
import MovieForm from '../../components/MovieForm';
import MovieList from '../../components/MovieList';

test('MovieForm nie dodaje pustego tytułu', async () => {
  const addMovieMock = vi.fn();
  render(
    <MovieProvider>
      <MovieForm />
      <MovieList />
    </MovieProvider>
  );

  const button = screen.getByText('Dodaj');

  fireEvent.click(button);

  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
});

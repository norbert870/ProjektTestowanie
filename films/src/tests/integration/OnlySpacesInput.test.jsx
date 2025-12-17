
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
  global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve([]) }));
});

test('nie dodaje filmu gdy tytuł zawiera tylko spacje', async () => {
  render(
    <MovieProvider>
      <MovieForm />
      <MovieList />
    </MovieProvider>
  );

  const input = screen.getByPlaceholderText('Wpisz tytuł filmu');
  const addButton = screen.getByText('Dodaj');

  fireEvent.change(input, { target: { value: '   ' } });
  fireEvent.click(addButton);

  await waitFor(() => {
    expect(screen.queryAllByRole('listitem').length).toBe(0);
  });
});

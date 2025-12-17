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

test('usuwa wszystkie filmy po kolei', async () => {
  render(
    <MovieProvider>
      <MovieForm />
      <MovieList />
    </MovieProvider>
  );

  const input = screen.getByPlaceholderText('Wpisz tytuł filmu');
  const addButton = screen.getByText('Dodaj');

  fireEvent.change(input, { target: { value: 'Matrix' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Inception' } });
  fireEvent.click(addButton);

  const removeButtons = await screen.findAllByText('Usuń');

  removeButtons.forEach(btn => fireEvent.click(btn));

  await waitFor(() => {
    expect(screen.queryByText('Matrix')).not.toBeInTheDocument();
    expect(screen.queryByText('Inception')).not.toBeInTheDocument();
  });
});

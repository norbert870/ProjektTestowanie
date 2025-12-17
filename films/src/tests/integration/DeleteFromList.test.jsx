import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MovieProvider } from '../../context/MovieContext';
import MovieForm from '../../components/MovieForm';
import MovieList from '../../components/MovieList';

global.fetch = vi.fn((url, options) => {
  if (options?.method === 'POST') {
    return Promise.resolve({ json: () => Promise.resolve({ id: 1, title: 'Matrix' }) });
  }
  if (options?.method === 'DELETE') {
    return Promise.resolve({ json: () => Promise.resolve({}) });
  }
  return Promise.resolve({ json: () => Promise.resolve([]) });
});

test('MovieItem można usunąć z listy', async () => {
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

  const removeButton = await screen.findByText('Usuń');
  fireEvent.click(removeButton);

  await waitFor(() => {
    expect(screen.queryByText('Matrix')).not.toBeInTheDocument();
  });
});

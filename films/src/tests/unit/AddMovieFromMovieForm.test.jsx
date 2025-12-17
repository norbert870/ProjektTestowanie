import { render, screen, fireEvent } from '@testing-library/react';
import { MovieContext } from '../../context/MovieContext';
import MovieForm from '../../components/MovieForm';
import { vi } from 'vitest';

test('MovieForm wywołuje addMovie po wprowadzeniu tytułu i kliknięciu Dodaj', () => {
  const addMovie = vi.fn();
  render(
    <MovieContext.Provider value={{ addMovie }}>
      <MovieForm />
    </MovieContext.Provider>
  );

  const input = screen.getByPlaceholderText('Wpisz tytuł filmu');
  const button = screen.getByText('Dodaj');

  fireEvent.change(input, { target: { value: 'Matrix' } });
  fireEvent.click(button);


  expect(addMovie).toHaveBeenCalledWith('Matrix');
});

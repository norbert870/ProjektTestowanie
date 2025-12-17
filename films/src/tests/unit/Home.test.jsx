import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { test, expect } from 'vitest';

test("Home renderuje tytuł strony", () => {
  render(<Home />);
  expect(screen.getByText("Movie Watchlist Manager")).toBeInTheDocument();
});
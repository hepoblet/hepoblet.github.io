import { render, screen } from '@testing-library/react';

import App from './App';

test('renders github text', () => {
  render(<App />);
  const textElement = screen.getByText(/github/i);
  expect(textElement).toBeInTheDocument();
});

test('renders hepoblet text', () => {
  render(<App />);
  const textElement = screen.getByText(/hepoblet/i);
  expect(textElement).toBeInTheDocument();
});

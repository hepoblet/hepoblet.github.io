import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hepoblet text', () => {
  render(<App />);
  const textElement = screen.getByText(/hepoblet/i);
  expect(textElement).toBeInTheDocument();
});

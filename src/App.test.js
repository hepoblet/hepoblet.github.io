import { render, screen } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import App from './App';

let matchMedia;

describe('basic test', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test('renders information text', () => {
    render(<App />);
    const textElement = screen.getByText(/information/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders projects text', () => {
    render(<App />);
    const textElement = screen.getAllByText(/projects/i);
    expect(textElement[0]).toBeInTheDocument();
  });
});

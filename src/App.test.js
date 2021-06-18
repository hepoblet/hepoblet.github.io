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

  test('renders home text', () => {
    render(<App />);
    const textElement = screen.getAllByText(/home/i);
    expect(textElement[0]).toBeInTheDocument();
  });

  test('renders contact text', () => {
    render(<App />);
    const textElement = screen.getAllByText(/contact/i);
    expect(textElement[0]).toBeInTheDocument();
  });
});

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

  test('renders github text', () => {
    render(<App />);
    const textElement = screen.getByText(/github/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders hepoblet text', () => {
    render(<App />);
    const textElement = screen.getAllByText(/hepoblet/i);
    expect(textElement[0]).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders forecast column', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cities of interest/i);
  expect(linkElement).toBeInTheDocument();
});

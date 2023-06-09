import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello react project title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hello react/i);
  expect(titleElement).toBeInTheDocument();
});

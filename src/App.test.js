import { render, screen } from '@testing-library/react';
import AuthPage from './AuthPage';

test('renders learn react link', () => {
  render(<AuthPage />);
  const linkElement = screen.getByText(/Sign up/i);
  expect(linkElement).toBeInTheDocument();
});


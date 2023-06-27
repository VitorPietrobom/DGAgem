import { render, screen } from '@testing-library/react';
import { DGAViagensApp } from './App';

test('renders learn react link', () => {
  render(<DGAViagensApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

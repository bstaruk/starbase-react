import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './index';

test('renders hello world', () => {
  render(<HomePage />);
  const helloWorldElement = screen.getByText(/hello world/i);
  expect(helloWorldElement).toBeInTheDocument();
});

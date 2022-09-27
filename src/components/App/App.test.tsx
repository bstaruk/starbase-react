import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders hello world', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/hello world/i);
  expect(helloWorldElement).toBeInTheDocument();
});

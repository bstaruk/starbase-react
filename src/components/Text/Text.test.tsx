import React from 'react';
import { render, screen } from 'testUtils';
import Text from './index';

test('renders hello world', () => {
  render(<Text>Hello World</Text>);
  const el = screen.getByText(/hello world/i);
  expect(el).toBeInTheDocument();
});

test('renders heading', () => {
  render(<Text as="h1">Hello World</Text>);
  const el = screen.getByRole('heading', { name: 'Hello World' });
  expect(el).toBeInTheDocument();
});

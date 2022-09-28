import React from 'react';
import { render, screen } from 'testUtils';
import Button from './index';

test('renders hello world', () => {
  render(<Button>Hello World</Button>);
  const helloWorldElement = screen.getByText(/hello world/i);
  expect(helloWorldElement).toBeInTheDocument();
});

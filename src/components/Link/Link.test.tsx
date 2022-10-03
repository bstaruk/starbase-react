import React from 'react';
import { render, screen } from 'testUtils';
import Link from './index';

test('renders label', () => {
  render(<Link href="#">Hello World</Link>);
  const el = screen.getByText(/hello world/i);
  expect(el).toBeInTheDocument();
});

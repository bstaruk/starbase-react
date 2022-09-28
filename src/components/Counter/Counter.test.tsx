import React from 'react';
import { fireEvent, render, screen } from 'testUtils';
import Counter from './index';

test('renders 0 initially', () => {
  render(<Counter />);
  const el = screen.getByText(/0/i);
  expect(el).toBeInTheDocument();
});

test('renders 1 after increment', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: 'Increment value' });
  await fireEvent.click(button);
  const newCount = screen.getByText(/1/i);
  expect(newCount).toBeInTheDocument();
});

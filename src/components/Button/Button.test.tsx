import React from 'react';
import { fireEvent, render, screen } from 'testUtils';
import Button from './index';

test('renders label', () => {
  render(<Button>Hello World</Button>);
  const el = screen.getByText(/hello world/i);
  expect(el).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

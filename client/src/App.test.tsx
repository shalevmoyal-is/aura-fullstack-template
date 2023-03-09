import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('test example', () => {
  render(<App />);
  const helloElement = screen.getByText('Hello client!');
  expect(helloElement).toBeInTheDocument();
});

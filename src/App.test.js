import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form', () => {
  render(<App />)
  expect(screen.getByText('Ridiculous Tech Tips Newsletter')).toBeInTheDocument()
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the button with the correct initial text', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Increment count: 0');
  });

  it('updates the button text when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Increment count: 1');
  });
});

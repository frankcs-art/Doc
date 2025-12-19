import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the button with the correct initial aria-label', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Increment count. Current count: 0');
  });

  it('updates the aria-label when the button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Increment count. Current count: 1');
  });
});

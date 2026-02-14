import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the button with the correct initial text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Increment count: 0' });
    expect(button).toBeInTheDocument();
  });

  it('updates the button text when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Increment count/i });
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: 'Increment count: 1' })).toBeInTheDocument();
  });
});

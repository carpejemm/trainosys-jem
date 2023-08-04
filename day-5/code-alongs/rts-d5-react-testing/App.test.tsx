import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import App from './src/App';

describe('<App />', () => {
  test('App mounts properly', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();

    // Get by h1
    const h1 = container.querySelector('h1');
    expect(h1?.textContent).toBe('Vite + React');

    // Get by text using the React testing library
    const text = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(text.textContent).toBeTruthy();
  });

  test('Click the buttons to increment and decrement count', () => {
    const { container } = render(<App />);
    const incrementButton = getByText(container, 'Increment');
    const decrementButton = getByText(container, 'Decrement');

    // Both buttons should be present
    expect(incrementButton).toBeTruthy();
    expect(decrementButton).toBeTruthy();

    // Initial count should be 0
    const countDisplay = getByText(container, 'Count: 0');
    expect(countDisplay.textContent).toBe('Count: 0');

    // Click the increment button
    fireEvent.click(incrementButton);

    // The count should be incremented to 1
    expect(countDisplay.textContent).toBe('Count: 1');

    // Click the decrement button
    fireEvent.click(decrementButton);

    // The count should be decremented to 0
    expect(countDisplay.textContent).toBe('Count: 0');
  });
});

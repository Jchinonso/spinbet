import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingIndicator } from './LoadingIndicator';

describe('LoadingIndicator', () => {
  it('renders container div with correct classes', () => {
    render(<LoadingIndicator />);
    const containerDiv = screen.getByTestId('container-div');
    expect(containerDiv).toHaveClass(
      'flex items-center justify-center h-screen'
    );
  });

  it('renders spinner icon', () => {
    render(<LoadingIndicator />);
    const spinnerIcon = screen.getByTestId('spinner-icon');
    expect(spinnerIcon).toBeInTheDocument();
  });

  it('has correct classes applied to the spinner icon', () => {
    render(<LoadingIndicator />);
    const spinnerIcon = screen.getByTestId('spinner-icon');
    expect(spinnerIcon).toHaveClass('animate-spin text-4xl text-gray-500');
  });

  it('is visible on the screen', () => {
    render(<LoadingIndicator />);
    const spinnerIcon = screen.getByTestId('spinner-icon');
    expect(spinnerIcon).toBeVisible();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamName from './TeamName';

describe('TeamName component', () => {
  it('renders the component with the given team name', () => {
    const testName = 'Sample Team Name';
    render(<TeamName name={testName} />);
    expect(screen.getByText(testName)).toBeInTheDocument();
  });

  it('applies the correct class names', () => {
    const testName = 'Sample Team Name';
    render(<TeamName name={testName} />);
    const element = screen.getByText(testName);

    expect(element).toHaveClass(
      'text-base',
      'truncate-18-lg',
      'truncate-10-sm',
      'md-truncate-8',
      'sm:text-sm',
      'md:text-sm',
      'lg:text-lg',
      'font-semibold',
      'w-16',
      'sm:w-20',
      'md:w-28',
      'lg:w-32',
      'block'
    );
  });

  test('renders an empty span when name prop is not provided', () => {
    render(<TeamName />);
    const spanElement = screen.getByTestId('team-name');
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toBeEmptyDOMElement();
  });

  test('renders an empty span when name prop is an empty string', () => {
    render(<TeamName name="" />);
    const spanElement = screen.getByTestId('team-name');
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toBeEmptyDOMElement();
  });
});

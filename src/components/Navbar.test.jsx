import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();

    expect(navElement).toHaveClass(
      'bg-gray-800 p-4 text-white font-bold font-barlow flex justify-center items-center'
    );

    // Check if the h1 element is rendered with the correct text
    const titleElement = screen.getByRole('heading', {
      level: 1,
      name: /Spinbet Betting Platform/i,
    });
    expect(titleElement).toBeInTheDocument();
  });
});

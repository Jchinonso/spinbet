import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();

    expect(navElement).toHaveClass(
      'bg-gray-800 px-4 py-2 md:py-4 text-white font-bold font-barlow flex justify-center items-center'
    );
    const titleElement = screen.getByRole('heading', {
      level: 1,
      name: /Spinbet Betting Platform/i,
    });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('text-xl md:text-2xl lg:text-3xl');
  });
});

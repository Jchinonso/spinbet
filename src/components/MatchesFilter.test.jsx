import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MatchesFilter from './MatchesFilter';

describe('MatchesFilter', () => {
  const mockSetFilter = jest.fn();
  const counts = {
    ALL: 10,
    RESULT: 4,
    LIVE: 3,
    UPCOMING: 3,
  };

  it('renders filter buttons', () => {
    render(
      <MatchesFilter filter="ALL" setFilter={mockSetFilter} counts={counts} />
    );
    const filterButtons = screen.getAllByRole('button');
    expect(filterButtons.length).toBe(4);
  });

  it('sets active filter correctly', () => {
    const { getByText } = render(
      <MatchesFilter filter="RESULT" setFilter={mockSetFilter} counts={counts} />
    );
    const allFilterButton = getByText('RESULT');
    fireEvent.click(allFilterButton);
    expect(mockSetFilter).toHaveBeenCalledWith('RESULT');
  });

  it('changes filter on button click', () => {
    render(
      <MatchesFilter filter="LIVE" setFilter={mockSetFilter} counts={counts} />
    );
    const liveFilterButton = screen.getByText('UPCOMING');
    fireEvent.click(liveFilterButton);
    expect(mockSetFilter).toHaveBeenCalledWith('UPCOMING');
  });
});

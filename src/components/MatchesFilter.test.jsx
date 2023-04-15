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
      <MatchesFilter filter="ALL" setFilter={mockSetFilter} counts={counts} />
    );
    const allFilterButton = getByText('ALL');
    fireEvent.click(allFilterButton);
    expect(mockSetFilter).toHaveBeenCalledWith('ALL');
  });

  it('changes filter on button click', () => {
    render(
      <MatchesFilter filter="ALL" setFilter={mockSetFilter} counts={counts} />
    );
    const liveFilterButton = screen.getByText('LIVE');
    fireEvent.click(liveFilterButton);
    expect(mockSetFilter).toHaveBeenCalledWith('LIVE');
  });
});

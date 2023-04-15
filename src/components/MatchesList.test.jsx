import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import MatchesList from './MatchesList';
import { mockMatchListData, mockCounts, liveMockMatchListData } from '@/__mocks__/mockMatchListData';


describe('MatchesList', () => {

  it('renders loading indicator when loading', () => {
    render(
      <MatchesList
        loading={true}
        error={null}
        data={null}
        filter="ALL"
        setFilter={() => {}}
        counts={mockCounts}
      />
    );

    const loadingIndicator = screen.getByTestId('spinner-icon');
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('renders error message when error is present', () => {
    render(
      <MatchesList
        loading={false}
        error={new Error('An error occurred')}
        data={null}
        filter="ALL"
        setFilter={() => {}}
        counts={mockCounts}
      />
    );

    const errorMessage = screen.getByText(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders matches when data is available', () => {
    render(
      <MatchesList
        loading={false}
        error={null}
        data={mockMatchListData}
        filter="ALL"
        setFilter={() => {}}
        counts={mockCounts}
      />
    );
    const matchElements = mockMatchListData.matches.edges.map((_, index) =>
      screen.getByTestId(`match-${index}`)
    );
    expect(matchElements.length).toBe(mockMatchListData.matches.edges.length);
  });

  it('renders "Loading more matches..." when there are more matches to load', () => {
    const pageInfoWithMoreMatches = {
      ...mockMatchListData.pageInfo,
      hasNextPage: true,
    };

    render(
      <MatchesList
        loading={false}
        error={null}
        data={{
          ...mockMatchListData,
          matches: {
            ...mockMatchListData.matches,
            pageInfo: pageInfoWithMoreMatches,
          },
        }}
        filter="ALL"
        setFilter={() => {}}
        counts={mockCounts}
      />
    );

    const loadingMoreMatchesText = screen.getByText(/Loading more matches.../i);
    expect(loadingMoreMatchesText).toBeInTheDocument();
  });

  it('displays the correct team names, competition, and country for each match', () => {
    render(
      <MatchesList
        loading={false}
        error={null}
        data={mockMatchListData}
        filter="ALL"
        setFilter={() => {}}
        counts={mockCounts}
      />
    );

    mockMatchListData.matches.edges.forEach((match, index) => {
      const { node } = match;
      expect(screen.getByText(node.homeTeam.name)).toBeInTheDocument();
      expect(screen.getByText(node.awayTeam.name)).toBeInTheDocument();
      expect(screen.getByText(node.competition)).toBeInTheDocument();
      expect(screen.getByText(node.country)).toBeInTheDocument();
    });
  });

  it('displays the correct score for each match', () => {
    render(
      <MatchesList
        loading={false}
        error={null}
        data={mockMatchListData}
        filter="ALL"
        setFilter={() => {}}
        counts={mockCounts}
      />
    );

    mockMatchListData.matches.edges.forEach(match => {
      const { node } = match;
      const scoreText = `${node.homeScore.current} - ${node.awayScore.current}`;
      expect(screen.getByText(scoreText)).toBeInTheDocument();
    });
  });

  it('displays the correct live status for each match', () => {
    render(
      <MatchesList
        loading={false}
        error={null}
        data={mockMatchListData}
        filter="ALL"
        setFilter={() => {}}
        counts={mockCounts}
      />
    );
    let totalLiveStatusCount = 0;
    mockMatchListData.matches.edges.forEach((match, index) => {
      const { node } = match;
      const matchElement = screen.getByTestId(`match-${index}`);
      const liveStatusElement = within(matchElement).getByTestId(
        `live-status-match-${index}`
      );
      if (liveStatusElement.textContent === node.liveStatus) {
        totalLiveStatusCount += 1;
      }
    });
    expect(totalLiveStatusCount).toEqual(
      liveMockMatchListData.matches.edges.length
    );
  });

  it('displays filter buttons and updates filter state when clicked', () => {
    const setFilter = jest.fn();
    render(
      <MatchesList
        loading={false}
        error={null}
        data={mockMatchListData}
        filter="ALL"
        setFilter={setFilter}
        counts={mockCounts}
      />
    );

    const filterButtons = screen.getAllByRole('button');
    filterButtons.forEach(button => {
      fireEvent.click(button);
      expect(setFilter).toHaveBeenCalledWith(
        button.textContent.replace(/\d+/g, '').trim()
      );
    });
  });
});

import 'cross-fetch/polyfill';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';
import MatchesListContainer from './MatchesListContainer';
import MATCHES_QUERY from '@/queries/MatchesQuery';
import {
  mockMatchListData,
  resultMockMatchListData,
  liveMockMatchListData,
} from '../__mocks__/mockMatchListData';

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    this.callback([{ isIntersecting: true }]);
  }

  unobserve() {}
}
global.IntersectionObserver = IntersectionObserverMock;

const allMocks = [
  {
    request: {
      query: MATCHES_QUERY,
      variables: { first: 10, filter: 'ALL' },
    },
    result: { data: mockMatchListData },
  },
  {
    request: {
      query: MATCHES_QUERY,
      variables: { first: 10, filter: 'RESULT' },
    },
    result: { data: resultMockMatchListData },
  },
  {
    request: {
      query: MATCHES_QUERY,
      variables: { first: 10, filter: 'LIVE' },
    },
    result: { data: liveMockMatchListData },
  },
];

describe('MatchesListContainer', () => {
  it('should render matches list with filter options', async () => {
    render(
      <MockedProvider mocks={allMocks} addTypename={false}>
        <MatchesListContainer initialData={null} initialError={null} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Matches')).toBeInTheDocument();
    });

    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText('RESULT')).toBeInTheDocument();
    expect(screen.getByText('LIVE')).toBeInTheDocument();
    expect(screen.getByText('UPCOMING')).toBeInTheDocument();
  });

  it('should filter matches based on selected filter', async () => {
    render(
      <MockedProvider mocks={allMocks} addTypename={false}>
        <MatchesListContainer />
      </MockedProvider>
    );

    await waitFor(() => {
      const resultMatches = screen.queryAllByTestId(/match-/);
      expect(resultMatches.length).toBe(4);
    });
    const resultFilter = screen.getByText('RESULT');
    userEvent.click(resultFilter);

    await waitFor(() => {
      const liveMatches = screen.queryAllByTestId(/match-/);
      expect(liveMatches.length).toBe(2);
    });
    const liveFilter = screen.getByText('LIVE');
    userEvent.click(liveFilter);

    await waitFor(() => {
      const liveMatches = screen.queryAllByTestId(/match-/);
      expect(liveMatches.length).toBe(2);
    });
  });
});

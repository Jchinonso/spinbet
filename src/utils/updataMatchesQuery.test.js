import updateMatchesQuery from './updateMatchesQuery';

describe('updateMatchesQuery', () => {
  test('should return previous data if fetchMoreResult is not provided', () => {
    const prev = {
      matches: {
        edges: [{ id: 1 }, { id: 2 }],
      },
    };
    const fetchMoreResult = null;
    expect(updateMatchesQuery(prev, { fetchMoreResult })).toEqual(prev);
  });

  test('should combine previous and fetchMoreResult edges', () => {
    const prev = {
      matches: {
        edges: [{ id: 1 }, { id: 2 }],
      },
    };
    const fetchMoreResult = {
      matches: {
        edges: [{ id: 3 }, { id: 4 }],
        pageInfo: {
          hasNextPage: true,
          endCursor: 'cursor-4',
        },
      },
    };
    const expectedResult = {
      matches: {
        edges: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        pageInfo: {
          hasNextPage: true,
          endCursor: 'cursor-4',
        },
      },
    };
    expect(updateMatchesQuery(prev, { fetchMoreResult })).toEqual(expectedResult);
  });
});

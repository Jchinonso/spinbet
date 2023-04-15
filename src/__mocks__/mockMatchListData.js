export const mockMatchListData = {
  matches: {
    edges: [
      {
        cursor: 'Y3Vyc29yLTg=',
        node: {
          id: 'hadhefg',
          name: 'IF Elfsborg - BK Häcken',
          competition: 'Allsvenskan',
          country: 'Sweden',
          timestamp: 1470576600,
          status: {
            type: 'inprogress',
          },
          homeScore: {
            current: 2,
          },
          awayScore: {
            current: 3,
          },
          homeTeam: {
            name: 'IF Elfsborg',
          },
          awayTeam: {
            name: 'BK Häcken',
          },
          liveStatus: '45+',
        },
      },
      {
        cursor: 'Y3Vyc29yLTY=',
        node: {
          id: 'hbbjjgj',
          name: 'FC Ufa - Zenit St. Petersburg',
          competition: 'Premier League',
          country: 'Russia',
          timestamp: 1470492000,
          status: {
            type: 'finished',
          },
          homeScore: {
            current: 0,
          },
          awayScore: {
            current: 0,
          },
          homeTeam: {
            name: 'FC Ufa',
          },
          awayTeam: {
            name: 'Zenit St. Petersburg',
          },
          liveStatus: 'FT',
        },
      },
    ],
    pageInfo: {
      hasNextPage: false,
      endCursor: 'Y3Vyc29yLTY=',
      matchCounts: {
        all: 2,
        result: 2,
        live: 0,
        upcoming: 0,
      },
    },
    pageCount: 1,
  },
};

export const mockCounts = {
  ALL: 3,
  RESULT: 1,
  LIVE: 1,
  UPCOMING: 1,
};

const resultMatches = mockMatchListData.matches.edges.filter(
  match => match.node.status.type === 'finished'
);

const liveMatches = mockMatchListData.matches.edges.filter(
  match => match.node.status.type === 'inprogress'
);

export const resultMockMatchListData = {
  matches: {
    edges: resultMatches,
    pageInfo: {
      hasNextPage: false,
      endCursor: 'Y3Vyc29yLTY=',
      matchCounts: {
        all: 2,
        result: 2,
        live: 0,
        upcoming: 0,
      },
    },
    pageCount: 1,
  },
};

export const liveMockMatchListData = {
  matches: {
    edges: liveMatches,
    pageInfo: {
      hasNextPage: false,
      endCursor: 'Y3Vyc29yLTY=',
      matchCounts: {
        all: 2,
        result: 2,
        live: 0,
        upcoming: 0,
      },
    },
    pageCount: 1,
  },
};

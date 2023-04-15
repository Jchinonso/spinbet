export const mockMatchListData = {
  matches: {
    edges: [
      {
        cursor: 'Y3Vyc29yLTU=',
        node: {
          id: 'hbahiij',
          name: 'LKS Nieciecza - Gornik Leczna',
          competition: 'Ekstraklasa',
          country: 'Poland',
          timestamp: 1470490200,
          status: {
            type: 'finished',
          },
          homeScore: {
            current: 2,
          },
          awayScore: {
            current: 1,
          },
          homeTeam: {
            name: 'LKS Nieciecza',
          },
          awayTeam: {
            name: 'Gornik Leczna',
          },
          liveStatus: 'FT',
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
      hasNextPage: true,
      matchCounts: {
        all: 179,
        result: 93,
        live: 18,
        upcoming: 65,
      },
    },
    pageCount: 36,
  },
};


export const mockCounts = {
  ALL: 3,
  RESULT: 1,
  LIVE: 1,
  UPCOMING: 1,
};

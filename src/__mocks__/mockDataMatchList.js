const mockData = [
  {
    request: {
      query: MATCHES_QUERY,
      variables: { first: 5 },
    },
    result: {
      data: {
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
            {
              cursor: 'Y3Vyc29yLTc=',
              node: {
                id: 'hbbcjai',
                name: 'Stal Kamianske - Volyn Lutsk',
                competition: 'Premier League',
                country: 'Ukraine',
                timestamp: 1470492000,
                status: {
                  type: 'finished',
                },
                homeScore: {
                  current: 1,
                },
                awayScore: {
                  current: 0,
                },
                homeTeam: {
                  name: 'Stal Kamianske',
                },
                awayTeam: {
                  name: 'Volyn Lutsk',
                },
                liveStatus: 'FT',
              },
            },
            {
              cursor: 'Y3Vyc29yLTg=',
              node: {
                id: 'hadheha',
                name: 'Falkenbergs FF - Jönköpings',
                competition: 'Allsvenskan',
                country: 'Sweden',
                timestamp: 1470492000,
                status: {
                  type: 'finished',
                },
                homeScore: {
                  current: 0,
                },
                awayScore: {
                  current: 5,
                },
                homeTeam: {
                  name: 'Falkenbergs FF',
                },
                awayTeam: {
                  name: 'Jönköpings',
                },
                liveStatus: 'FT',
              },
            },
            {
              cursor: 'Y3Vyc29yLTk=',
              node: {
                id: 'gjgjfic',
                name: 'Degerfors IF - Ängelholms FF',
                competition: 'Superettan',
                country: 'Sweden',
                timestamp: 1470492000,
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
                  name: 'Degerfors IF',
                },
                awayTeam: {
                  name: 'Ängelholms FF',
                },
                liveStatus: 'FT',
              },
            },
          ],
          pageInfo: {
            hasNextPage: true,
            endCursor: 'Y3Vyc29yLTk=',
            matchCounts: {
              all: 179,
              result: 93,
              live: 18,
              upcoming: 65,
            },
          },
          pageCount: 36,
        },
      },
    },
  },
];



export const mockCounts = {
  ALL: 3,
  RESULT: 1,
  LIVE: 1,
  UPCOMING: 1,
};

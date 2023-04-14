import { gql } from "@apollo/client";

const MATCHES_QUERY = gql`
  query MatchesList($first: Int, $after: String, $filter: Filter) {
    matches(first: $first, after: $after, filter: $filter) {
      edges {
        cursor
        node {
          id
          name
          competition
          country
          timestamp
          status {
            type
          }
          homeScore {
            current
          }
          awayScore {
            current
          }
          homeTeam {
            name
          }
          awayTeam {
            name
          }
          liveStatus
        }
      }
      pageInfo {
        hasNextPage
        endCursor
        matchCounts {
          all
          result
          live
          upcoming
        }
      }
      pageCount
    }
  }
`;

export default MATCHES_QUERY;

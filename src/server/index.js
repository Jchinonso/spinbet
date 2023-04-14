import { gql } from "graphql-tag";
import { data } from "../utils/sports";
import countMatchesByStatus from "@/utils/countMatchesByStatus";
import applyFilter from "@/utils/applyFilter";
import { createCursor, parseCursor } from "@/utils/cursor";

export const typeDefs = gql`
  type Query {
    match(id: ID!): Match
    matches(first: Int, after: String, filter: Filter): MatchConnection
  }

  type MatchConnection {
    edges: [MatchEdge]
    pageInfo: PageInfo
    pageCount: Int!
  }

  type MatchEdge {
    cursor: String!
    node: Match!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String
    matchCounts: MatchCounts
  }

  enum Filter {
    ALL
    RESULT
    LIVE
    UPCOMING
  }

  type MatchCounts {
    all: Int!
    result: Int!
    live: Int!
    upcoming: Int!
  }

  type Match {
    id: ID
    name: String!
    competitionId: String!
    competition: String!
    countryId: String!
    country: String!
    timestamp: Int!
    date: String!
    time: String!
    status: Status!
    round: Round!
    homeTeam: Team!
    awayTeam: Team!
    homeScore: Score!
    awayScore: Score!
    liveStatus: String!
  }

  type Status {
    code: Int!
    type: String!
  }

  type Round {
    round: Int!
  }

  type Team {
    id: Int!
    name: String!
    slug: String!
    gender: String!
    subTeams: [String]
  }

  type Score {
    current: Int
    period1: Int!
    normaltime: Int!
  }
`;

export const resolvers = {
  Query: {
    match: (parent, args) => {
      return data.find((match) => match.id === args.id);
    },
    matches: (parent, args) => {
      const { first, after, filter } = args;
      const startIndex = after ? parseCursor(after) + 1 : 0;
      const filteredData = applyFilter(data, filter);
      const endIndex = first ? startIndex + first : filteredData.length;
      const slicedData = filteredData.slice(startIndex, endIndex);
      const hasNextPage = endIndex < filteredData.length;

      return {
        edges: slicedData.map((match, index) => ({
          cursor: createCursor(startIndex + index),
          node: match,
        })),
        pageInfo: {
          hasNextPage,
          endCursor: hasNextPage ? createCursor(endIndex - 1) : null,
          matchCounts: countMatchesByStatus(data),
        },
        pageCount: Math.ceil(
          filteredData.length / (first || filteredData.length)
        ),
      };
    },
  },
};

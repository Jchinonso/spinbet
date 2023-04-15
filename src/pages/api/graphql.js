import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '../../server';
import { resolvers } from '../../server';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enable introspection in production
  playground: process.env.NODE_ENV === 'production' && {
    endpoint: '/api/graphql', 
  },
});

export default startServerAndCreateNextHandler(apolloServer);

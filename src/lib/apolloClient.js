import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: '/api/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default apolloClient;

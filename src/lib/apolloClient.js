import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default apolloClient;

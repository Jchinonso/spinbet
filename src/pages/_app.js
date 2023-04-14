import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apolloClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

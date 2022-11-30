
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import "../styles/globals.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Footer from '../components/Footer';

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  )
}

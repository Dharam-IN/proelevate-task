import { AppProps } from 'next/app';
import { EventProvider } from '@/components/EventProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EventProvider>
      <Component {...pageProps} />
    </EventProvider>
  );
}

export default MyApp;

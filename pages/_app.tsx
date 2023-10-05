import '@/styles/globals.css';
import '@/styles/home.css'
import '@/styles/honor.css'
import '@/styles/store.css'
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

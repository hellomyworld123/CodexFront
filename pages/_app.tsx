import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D0D0D" />
        {/* Autres balises meta si besoin */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
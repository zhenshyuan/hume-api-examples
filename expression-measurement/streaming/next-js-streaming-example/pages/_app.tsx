import "../styles/globals.css";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hume AI | Facial Expression Streaming</title>
        <meta name="title" content="Hume AI | Facial Expression Streaming" />
        <meta name="description" content="Hume AI facial expression streaming sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-w-screen min-h-screen bg-neutral-100 font-main font-thin text-neutral-800">
        <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:px-10 md:px-14">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

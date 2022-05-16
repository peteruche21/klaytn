import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { initWallet } from "../lib/auth";
import { useEffect } from "react";
import globalState from "../state";

function MyApp({ Component, pageProps }: AppProps) {
  const state = globalState((state) => state);
  useEffect(() => {
    if (!state.isConnected) initWallet(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

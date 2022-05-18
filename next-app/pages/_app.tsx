import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { initWallet } from "../lib/auth";
import { useEffect, useMemo } from "react";
import { useNFTBalances } from "../hooks/useNFTBalances";
import { useNFTMarketsGlobalView } from "../hooks/useNFTMarketsGlobalView";
import { useWalletActivity } from "../hooks/useTransactions";
import useStore from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const state = useStore((state) => state);

  const queryBalances = useNFTBalances();
  const queryNFTMarkets = useNFTMarketsGlobalView();
  const queryTransactions = useWalletActivity();

  const initialize = () => {
    queryBalances("demo.eth");
    queryTransactions("demo.eth");
    queryNFTMarkets();
  };

  useEffect(() => {
    if (!state.isConnected) initWallet(state);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMemo(
    () => {
      if (state.address) initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.address]
  );

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

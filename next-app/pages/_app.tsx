import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { initWallet } from "../lib/auth";
import { useEffect, useMemo } from "react";
import { useNFTBalances } from "../hooks/useNFTBalances";
import { useNFTMarketsGlobalView } from "../hooks/useNFTMarketsGlobalView";
import { useWalletActivity } from "../hooks/useTransactions";
import globalState from "../state";

function MyApp({ Component, pageProps }: AppProps) {
  const state = globalState((state) => state);
  const queryBalances = useNFTBalances();
  const queryNFTMarkets = useNFTMarketsGlobalView();
  const queryTransactions = useWalletActivity();

  useEffect(() => {
    if (!state.isConnected) initWallet(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMemo(
    () => {
      if (state.isConnected && state.address) {
        queryBalances("demo.eth");
        queryTransactions("demo.eth");
        queryNFTMarkets();
        console.log("performed expensive operations!");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.address] // todo: persist the zustand store in session storage.
  );

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

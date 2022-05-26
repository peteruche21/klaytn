import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useStore from "../../store";
import { marketPlacesList } from "../../utils";
import Collections from "../../components/Collections";
import NFTMarkets from "../../components/MarketPlaces";
import dynamic from "next/dynamic";
import Mint from "../../components/Mint";

const LazyNFTList = dynamic(() => import("../../components/NFTList"));

const NFT: NextPage = () => {
  const state = useStore((state) => state);
  const [marketGlobalView, setMarketGlobalView] = useState<{}[]>([]);
  const [nftBalance, setNftBalance] = useState<{}[]>([]);

  useEffect(() => {
    setMarketGlobalView(state.nftMarketsData);
    setNftBalance(state.nftBalance);
  }, [state.nftMarketsData, state.nftBalance]);

  return (
    <div className="space-y-10">
      <Mint />
      <div>
        <LazyNFTList data={nftBalance} />
      </div>
      <div className="flex flex-row gap-3 flex-wrap">
        <Collections data={marketGlobalView} />
        <NFTMarkets data={marketPlacesList()} />
      </div>
    </div>
  );
};

export default NFT;

import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import useStore from "../../store";
import { marketPlacesList } from "../../utils";
import Collections from "../../components/Collections";
import style from "./NFT.module.css";
import NFTMarkets from "../../components/MarketPlaces";

const NFT: NextPage = () => {
  const state = useStore((state) => state);
  const [marketGlobalView, setMarketGlobalView] = useState<{}[]>([]);

  useEffect(() => {
    setMarketGlobalView(state.nftMarketsData);
  }, [state.nftMarketsData]);

  return (
    <div className={style.container}>
      <div className={style.paddedContainer}>
        <div className="cards flex justify-around flex-wrap mt-6">
          {[...Array(5)].map((data) => (
            <Card />
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-3 flex-wrap">
        <Collections data={marketGlobalView} />
        <NFTMarkets data={marketPlacesList()} />
      </div>
    </div>
  );
};

export default NFT;

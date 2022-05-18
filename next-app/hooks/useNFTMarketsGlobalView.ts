import { useState } from "react";
import { NFTMarketsGlobalViewEndpoint } from "../lib/endpoints";
import { query } from "../lib/query";
import useStore from "../store";

export const useNFTMarketsGlobalView = () => {
  const state = useStore((state) => state);
  const queryNFTMarkets = async () => {
    // query balance
    const response = await query(NFTMarketsGlobalViewEndpoint());
    // filter out data
    const reducedResult = reduceResult(response);
    // aets market data
    state.setNftMarketsData(reducedResult);
  };

  const reduceResult = (data: {}[]) => {
    const result = data.reduce(
      (memo: {}[], marketData: { [key: string]: string }) => {
        memo.push({
          collectionName: marketData.collection_name,
          collectionAddress: marketData.collection_address,
          volume24h: marketData.volume_quote_24h,
          avgVolume24h: marketData.avg_volume_quote_24h,
          marketCap: marketData.market_cap_quote,
          floorPrice: marketData.floor_price_quote_7d,
          maxPrice: marketData.max_price_quote,
          genesisNft: marketData.first_nft_image,
        });
        return memo;
      },
      []
    );
    return result;
  };

  return queryNFTMarkets;
};

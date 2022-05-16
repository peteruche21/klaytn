import { useState } from "react";
import { TokenBalancesEndpoint } from "../lib/endpoints";
import { query } from "../lib/query";

interface INFTs {
  [key: string]: { [key: string]: { [key: string]: unknown } }[];
}

export const useNFTBalances = () => {
  const [nftBalance, setNftBalance] = useState<{}[]>([]);
  const [tokenBalance, setTokenBalance] = useState<{}[]>([]);

  async function queryBalances(address: string) {
    // query balance
    const response = await query(TokenBalancesEndpoint(address));
    // filter out nfts
    const reducedResult = reduceResult(response);
    // setsBalance
    setNftBalance(reducedResult);
  }

  const reduceResult = (data: {}[]) => {
    const result = data.reduce((memo: {}[], nfts: INFTs) => {
      if (nfts.nft_data?.length > 0) {
        nfts.nft_data.map((nft) => {
          memo.push({
            contractName: nfts.contract_name,
            contractAddress: nfts.contract_address,
            logoUrl: nfts.logo_url,
            tokenId: nft.token_id,
            tokenUrl: nft.token_url,
            owner: nft.owner,
            name: nft.external_data.name,
            description: nft.external_data.description,
            image: nft.external_data.image,
            externalUrl: nft.external_data.external_url,
            attributes: nft.external_data.attributes,
          });
        });
      }
      return memo;
    }, []);
    return result;
  };

  return { queryBalances, nftBalance, tokenBalance };
};

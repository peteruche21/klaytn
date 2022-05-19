import { TokenBalancesEndpoint } from "../lib/endpoints";
import { query } from "../lib/query";
import useStore from "../store";

interface INFTs {
  [key: string]: { [key: string]: { [key: string]: unknown } }[];
}

export const useTokenBalances = () => {
  const state = useStore((state) => state);
  async function queryBalances(address: string) {
    // query balance
    const response = await query(TokenBalancesEndpoint(address));
    // filter out nfts
    const { ERC20Balance, NFTBalance } = reduceResult(response);
    // setsBalance
    state.setNftBalance(NFTBalance);
    state.setERC20Balance(ERC20Balance);
  }

  const reduceResult = (data: {}[]) => {
    const ERC20Balance: {}[] = [];
    const NFTBalance = data.reduce((memo: {}[], tokens: INFTs) => {
      if (tokens.nft_data?.length > 0) {
        tokens.nft_data.map((nft) => {
          memo.push({
            contractName: tokens.contract_name,
            contractAddress: tokens.contract_address,
            logoUrl: tokens.logo_url,
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
      } else {
        ERC20Balance.push({
          decimals: tokens.contract_decimals,
          name: tokens.contract_name,
          symbol: tokens.contract_ticker_symbol,
          contractAddress: tokens.contract_address,
          logo: tokens.logo_url,
          balance: tokens.balance,
          usdPrice: tokens.quote_rate,
        });
      }
      return memo;
    }, []);
    return { NFTBalance, ERC20Balance };
  };

  return queryBalances;
};

export const TokenBalancesEndpoint = (address: string): string => {
  return `/address/${address}/balances_v2/?quote-currency=USD&nft=true&`;
};

export const NFTMarketsGlobalViewEndpoint = (): string => {
  return "/nft_market/?quote-currency=USD&";
};

export const TransactionsEndpoint = (address: string): string => {
  return `/address/${address}/transactions_v2/?quote-currency=USD&`;
};

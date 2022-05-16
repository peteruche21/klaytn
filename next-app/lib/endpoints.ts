export const TokenBalancesEndpoint = (address: string) => {
  return `/address/${address}/balances_v2/?quote-currency=USD&nft=true&`;
};

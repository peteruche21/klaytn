import { TransactionsEndpoint } from "../lib/endpoints";
import { query } from "../lib/query";
import useStore from "../store";

export const useWalletActivity = () => {
  const state = useStore((state) => state);
  const queryTransactions = async (address: string) => {
    // query balance
    const response = await query(TransactionsEndpoint(address));
    // filter out nfts
    const reducedResult = reduceResult(response);
    // setsBalance
    state.setWalletActivity(reducedResult);
  };

  const reduceResult = (data: {}[]) => {
    const result = data.reduce((memo: {}[], tx: { [key: string]: unknown }) => {
      memo.push({
        timestamp: tx.block_signed_at,
        hash: tx.tx_hash,
        successful: tx.successful,
        from: tx.from_address,
        fromLabel: tx.from_address_label,
        to: tx.to_address,
        toLabel: tx.to_address_label,
        valueWei: tx.value,
        valueUsd: tx.value_quote,
      });
      return memo;
    }, []);
    return result;
  };

  return queryTransactions;
};

import { TransactionsEndpoint } from "../lib/endpoints";
import { query } from "../lib/query";
import useStore from "../store";

interface IActivityGraph<T> {
  [key: string]: T;
}

export const useWalletActivity = () => {
  const state = useStore((state) => state);
  const queryTransactions = async (address: string) => {
    // query balance
    const response = await query(TransactionsEndpoint(address));
    // filter out nfts
    const reducedResult = reduceResult(response);
    // setsBalance
    state.setWalletActivity(reducedResult);
    // compute activity graph
    const activityGraph = onChainActivityGraph(reducedResult);
    // update state
    state.setActivityGraph(activityGraph);
  };

  const onChainActivityGraph = (data: { [key: string]: string }[]) => {
    const activityGraph: IActivityGraph<any> = {};
    data.map((item) => {
      const date = item.timestamp.slice(0, 10);
      if (activityGraph[date] === undefined) {
        activityGraph[date] = 1;
        if (activityGraph.labels === undefined) {
          activityGraph.labels = [date];
        } else {
          activityGraph.labels.push(date);
        }
      } else {
        activityGraph[date] += 1;
      }
    });
    return activityGraph;
  };

  const reduceResult = (data: {}[]) => {
    const result = data.reduce((memo: {}[], tx: { [key: string]: string }) => {
      memo.push({
        timestamp: tx.block_signed_at.slice(0, 10),
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

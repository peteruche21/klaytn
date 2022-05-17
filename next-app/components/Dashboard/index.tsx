import { FC } from "react";
import globalState from "../../state";

const NFTBalance: FC = () => {
  const state = globalState((state) => state);

  return (
    <div>
      <p>@Dev please use this function map through the nfts and render it.</p>
      <p>transaction count: {state.walletActivity!.length}</p>
      <pre>{JSON.stringify(state.walletActivity, null, 2)}</pre>
    </div>
  );
};

export default NFTBalance;

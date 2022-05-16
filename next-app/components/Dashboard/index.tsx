import { FC, useMemo } from "react";
import { useNFTBalances } from "../../hooks/useNFTBalances";
import globalState from "../../state";

const NFTBalance: FC = () => {
  const state = globalState((state) => state);
  const { queryBalances, nftBalance } = useNFTBalances();
  // get current user from browser instead of state
  const currentAcendUser =
    typeof window !== "undefined"
      ? sessionStorage.getItem("currentAcendUser")
      : state.address;
  useMemo(
    () => {
      if (state.address) {
        // still dont query unless the state.adress esists
        queryBalances(state.address as string);
        console.log("performed expensive calculation!");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentAcendUser] // fetch only once per session unless explicitly called
  );

  return (
    <div>
      <p>@Dev please use this function map through the nfts and render it.</p>
      <pre>{JSON.stringify(nftBalance, null, 2)}</pre>
      <p>nft count: {nftBalance.length}</p>
    </div>
  );
};

export default NFTBalance;

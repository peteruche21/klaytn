import { FC, useEffect, useState } from "react";
import useStore from "../../store";

const NFTBalance: FC = () => {
  const state = useStore((state) => state);
  const [nftData, setNFTData] = useState<{}[]>([]);
  useEffect(() => {
    setNFTData(state.nftBalance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>@Dev please use this function map through the nfts and render it.</p>
      <p>transaction count: {nftData!.length}</p>
      <pre>{JSON.stringify(nftData, null, 2)}</pre>
    </div>
  );
};

export default NFTBalance;

import { FC, useEffect, useState } from "react";
import useStore from "../../store";

const NFTBalance: FC = () => {
  const state = useStore((state) => state);
  const [activityGraph, setActivityGraph] = useState({});
  useEffect(() => {
    setActivityGraph(state.activityGraph);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activityGraph]);

  return (
    <div>
      <p>@Dev please use this function map through the nfts and render it.</p>
      {/* <p>transaction count: {nftData!.length}</p> */}
      <pre>{JSON.stringify(activityGraph, null, 2)}</pre>
    </div>
  );
};

export default NFTBalance;

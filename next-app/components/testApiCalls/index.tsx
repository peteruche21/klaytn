import { useNFTBalances } from "../../hooks/useNFTBalances";
import globalState from "../../state";

const Covalent = (): JSX.Element => {
  const state = globalState((state) => state);
  const { queryBalances, nftBalance } = useNFTBalances();
  async function runQuery() {
    await queryBalances(state.address as string);
  }

  return (
    <div>
      <button
        type="button"
        className="text-white text-center text-sm
                bg-[#272ddb] hover:bg-[#469ae4] 
                focus:ring-4 focus:outline-none focus:ring-[#94e1e4] 
                font-medium rounded-lg  
                px-5 py-2.5  mr-3 md:mr-0"
        onClick={runQuery}
      >
        query nfts
      </button>
    </div>
  );
};

export default Covalent;

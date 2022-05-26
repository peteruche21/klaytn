import caver from "./caver";
import NFTDeployment from "../deployments/baobab/AcendNFT.json";
import MinterDeployment from "../deployments/baobab/Minter.json"

const main = async () => {
  //@ts-ignore
  const nftContract = new caver.contract(NFTDeployment.abi, NFTDeployment.address);
  const minter = await nftContract.methods.MINTER_ROLE();
  const receipt = await nftContract.methods.grantRole(minter, MinterDeployment.address)
  console.log(receipt)
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

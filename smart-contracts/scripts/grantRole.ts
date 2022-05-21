import { argv } from "process";
import caver from "./caver";
import abi from "../artifacts/contracts/EIP17.sol/AcendNFT.json";

const address = argv[2];

const main = async () => {
  //@ts-ignore
  const nftContract = new caver.contract(abi.abi, address);
  const minter = await nftContract.call("MINTER_ROLE");
  await nftContract
    .send({ from: "0x" }, "grantRole", [minter, address])
    .then(console.log)
    .catch((error) => console.error(error));
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

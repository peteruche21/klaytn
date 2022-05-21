import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import caver from "../scripts/caver";

const deployMinter: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { getNamedAccounts, deployments, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy, log, get } = deployments;

  const nftContract = await get("AcendNFT");

  log("deploying minter contract");

  const receipt = await deploy("Minter", {
    from: deployer,
    args: [caver.utils.toPeb("0.05", "KLAY"), nftContract.address],
    log: true,
  });
  log("deployed minter at" + receipt.address);
};

export default deployMinter;
deployMinter.tags = ["all", "Minter"];

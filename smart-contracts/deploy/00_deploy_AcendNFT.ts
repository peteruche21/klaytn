import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployAcendNFT: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy, log } = deployments;
  log("deploying AcendNFT");
  const receipt = await deploy("AcendNFT", {
    from: deployer,
    args: [],
    log: true,
  });
  log("deployed nft contract at" + receipt.address);
};

export default deployAcendNFT;
deployAcendNFT.tags = ["all", "AcendNFT"];

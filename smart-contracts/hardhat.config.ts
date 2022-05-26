import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
// import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.10",
  },
  paths: { tests: "tests" },
  networks: {
    cypress: {
      url: process.env.CYPRESS_URL || "",
      chainId: 8217,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gas: 8500000,
      timeout: 3000000,
      gasPrice: 250000000000,
    },
    baobab: {
      url: process.env.BAOBAB_URL,
      chainId: 1001,
      accounts: [process.env.PRIVATE_KEY as string],
      gas: 500000,
      gasPrice: 250000000000,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  namedAccounts: {
    deployer: {
      default: 0, // index 0th account
    },
  },
};

export default config;

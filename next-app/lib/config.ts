interface IConfig {
  networkName: string;
  chainId: string;
  hexChainId?: string;
  httpRPCEndpoint: string | string[];
  wssRPCEndpoint?: string;
  walletUrl?: string;
  explorer: string;
}

type env = "testnet" | "mainnet" | "local" | "production" | "development";

export function getConfig(env: env): IConfig {
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkName: "Klaytn Cypress",
        chainId: "8217",
        hexChainId: "0x2019",
        httpRPCEndpoint: "https://public-node-api.klaytnapi.com/v1/cypress",
        wssRPCEndpoint: "wss://public-node-api.klaytnapi.com/v1/cypress/ws",
        walletUrl: "https://wallet.klaytn.com/",
        explorer: "https://scope.klaytn.com/",
      };
    case "development":
    case "testnet":
      return {
        networkName: "Klaytn Testnet Baobab",
        chainId: "1001",
        hexChainId: "0x3E9",
        httpRPCEndpoint: [
          "https://api.baobab.klaytn.net:8651",
          "https://public-node-api.klaytnapi.com/v1/baobab",
        ],
        wssRPCEndpoint: "wss://public-node-api.klaytnapi.com/v1/baobab/ws",
        walletUrl: "https://baobab.wallet.klaytn.foundation/",
        explorer: "https://baobab.scope.klaytn.com/",
      };
    case "local":
      return {
        networkName: "localhost",
        chainId: process.env.KLAYTN_CHIANID_LOCAL || "local",
        httpRPCEndpoint: process.env.KLAYTN_NODE_URL || "http://localhost:8080",
        explorer: "",
      };
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in lib/config.ts.`
      );
  }
}

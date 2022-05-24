import { IStore } from "../store";
import caver from "./caver";
import { getConfig } from "./config";

const ethereum = typeof window !== "undefined" ? window.ethereum : undefined;

const { networkName, hexChainId, httpRPCEndpoint, explorer } =
  getConfig("testnet");

export const connect = async () => {
  if (typeof ethereum === "undefined") return;
  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
  } catch (error) {
    console.log(error);
  }
};
export const addChain = async () => {
  await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: hexChainId,
        chainName: networkName,
        rpcUrls: [httpRPCEndpoint[0]],
        nativeCurrency: {
          name: networkName,
          symbol: "KLAY",
          decimals: 18,
        },
        blockExplorerUrls: [explorer],
      },
    ],
  });
};

export const switchChain = async () => {
  if (typeof ethereum === "undefined") return;
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: hexChainId }],
    });
  } catch (error) {
    try {
      addChain();
    } catch (error) {
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
    }
  }
};
export const initWallet = async (store: IStore) => {
  if (typeof ethereum === "undefined") return;
  try {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length === 0) return;
    store.setAddress(accounts[0]);
    const chainId = await ethereum.request({ method: "eth_chainId" });
    store.setActiveChain(chainId);
    store.setIsConnected(true);
  } catch (error) {
    console.log(error);
  }
  const handleChainChanged = () => {
    window.location.reload();
  };
  const handleDisconnect = () => {
    store.setIsConnected(false);
    store.setAddress("");
    window.location.reload();
  };
  ethereum.on("chainChanged", handleChainChanged);
  ethereum.on("disconnect", handleDisconnect);
};

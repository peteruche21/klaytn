import caver from "./caver";
import { getConfig } from "./config";

const { ethereum } = window;
const { networkName, chainId, httpRPCEndpoint, explorer } =
  getConfig("testnet");

export const connect = async (globalState) => {
  if (!(typeof ethereum !== "undefined")) return;
  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    if (!accounts) return;
    globalState.setAddress(accounts[0]);
  } catch (error) {
    console.log(error);
  }
};
export const addChain = async () => {
  await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: chainId,
        chainName: networkName,
        rpcUrls: [httpRPCEndpoint],
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
  if (!(typeof ethereum !== "undefined")) return;
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainId }],
    });
  } catch (error) {
    if ((error as { [key: string]: unknown }).code === 4902) {
      addChain();
    } else {
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
    }
  }
};
const initWallet = async (globalState) => {
  if (!(typeof ethereum !== "undefined")) return;
  const accounts = await ethereum.request({ method: "eth_accounts" });
  if (!accounts) return;
  globalState.setAddress(accounts[0]);
  const chainId = await ethereum.request({ method: "eth_chainId" });
  globalState.setActiveChain(chainId);
  const handleChainChanged = () => {
    window.location.reload();
  };
  ethereum.on("chainChanged", handleChainChanged);
};

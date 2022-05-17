import create from "zustand";
import { persist } from "zustand/middleware";

export interface IGlobalState {
  address: null | string;
  setAddress: (address: string) => void;

  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;

  activeChain: undefined | string;
  setActiveChain: (activeChain: string) => void;

  walletActivity: {}[];
  setWalletActivity: (walletActivity: {}[]) => void;

  nftMarketsData: {}[];
  setNftMarketsData: (nftMarketsData: {}[]) => void;

  nftBalance: {}[];
  setNftBalance: (nftBalance: {}[]) => void;
}

const globalState = create<IGlobalState>((set) => ({
  address: null,
  setAddress: (address: string) => set((state) => ({ address })),

  isConnected: false,
  setIsConnected: (isConnected: boolean) => set((state) => ({ isConnected })),

  activeChain: undefined,
  setActiveChain: (activeChain: string) => set((state) => ({ activeChain })),

  walletActivity: [],
  setWalletActivity: (walletActivity: {}[]) =>
    set((state) => ({ walletActivity })),

  nftMarketsData: [],
  setNftMarketsData: (nftMarketsData: {}[]) =>
    set((state) => ({ nftMarketsData })),

  nftBalance: [],
  setNftBalance: (nftBalance: {}[]) => set((state) => ({ nftBalance })),
}));

export default globalState;

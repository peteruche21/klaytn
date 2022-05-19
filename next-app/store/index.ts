import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";

export interface IStore {
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

  ERC20Balance: {}[];
  setERC20Balance: (ERC20Balance: {}[]) => void;

  activityGraph: {};
  setActivityGraph: (activityGraph: {}) => void;
}

const useStore = create(
  persist<IStore>(
    (set) => ({
      address: null,
      setAddress: (address: string) => set((state) => ({ address })),

      isConnected: false,
      setIsConnected: (isConnected: boolean) =>
        set((state) => ({ isConnected })),

      activeChain: undefined,
      setActiveChain: (activeChain: string) =>
        set((state) => ({ activeChain })),

      walletActivity: [],
      setWalletActivity: (walletActivity: {}[]) =>
        set((state) => ({ walletActivity })),

      nftMarketsData: [],
      setNftMarketsData: (nftMarketsData: {}[]) =>
        set((state) => ({ nftMarketsData })),

      nftBalance: [],
      setNftBalance: (nftBalance: {}[]) => set((state) => ({ nftBalance })),

      ERC20Balance: [],
      setERC20Balance: (ERC20Balance: {}[]) =>
        set((state) => ({ ERC20Balance })),

      activityGraph: {},
      setActivityGraph: (activityGraph: {}) =>
        set((state) => ({ activityGraph })),
    }),
    {
      name: "acend",
      getStorage: () => sessionStorage,
    }
  )
);

export default useStore;

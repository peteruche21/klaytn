import create from "zustand";

export interface IGlobalState {
  address: null | string;
  setAddress: (address: string) => void;

  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;

  activeChain: undefined | string;
  setActiveChain: (activeChain: string) => void;
}

const globalState = create<IGlobalState>((set) => ({
  address: null,
  setAddress: (address: string) => set((state) => ({ address })),

  isConnected: false,
  setIsConnected: (isConnected: boolean) => set((state) => ({ isConnected })),

  activeChain: undefined,
  setActiveChain: (activeChain: string) => set((state) => ({ activeChain })),
}));

export default globalState;

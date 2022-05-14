import create from "zustand";

const globalState = create((set) => ({
  address: null,
  setAddress: (address: string) => set((state) => ({ address })),

  isConnected: false,
  setIsConnected: (isConnected: boolean) => set((state) => ({ isConnected })),
}));

export default globalState;

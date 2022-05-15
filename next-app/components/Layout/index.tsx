import React, { FC, ReactNode } from "react";
import { connect, initWallet, switchChain } from "../../lib/auth";
import { getConfig } from "../../lib/config";
import globalState from "../../state";
import { formatAddress, WalletSeed } from "../../utils";

interface ILayoutNode {
  children?: ReactNode;
}

const Layout: FC<ILayoutNode> = ({ children }) => {
  const state = globalState((state) => state);
  const connectWallet = async () => {
    if (state.isConnected) return;
    await connect();
    initWallet(state);
  };
  const handleSwitch = () => {
    return (
      state.isConnected &&
      state.activeChain !== getConfig("testnet").hexChainId?.toLowerCase()
    );
  };
  const renderHeader = (): JSX.Element => {
    return (
      <nav
        className="
        px-2 sm:px-4 py-2.5 
        bg-gradient-to-r 
        from-transparent via-yellow-50 to-pink-50"
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://localhost:3000/app" className="flex items-center">
            {/* <img
              src="/brand/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="acend Logo"
            /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-600">
              Acend
            </span>
          </a>
          <div className="flex md:order-2">
            <div>
              <button
                type="button"
                className="text-white text-center text-sm
                bg-[#272ddb] hover:bg-[#469ae4] 
                focus:ring-4 focus:outline-none focus:ring-[#94e1e4] 
                font-medium rounded-lg  
                px-5 py-2.5  mr-3 md:mr-0"
                onClick={
                  state.isConnected
                    ? handleSwitch()
                      ? switchChain
                      : () => {}
                    : connectWallet
                }
              >
                {state.isConnected ? (
                  handleSwitch() ? (
                    "Switch Network"
                  ) : (
                    <div className="inline-flex gap-3">
                      {formatAddress(state.address as string)}
                      {WalletSeed(state.address as string)}
                    </div>
                  )
                ) : (
                  "Connect Wallet"
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  return (
    <>
      {renderHeader()}
      {children}
    </>
  );
};

export default Layout;

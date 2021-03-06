import React, { FC, ReactNode, useState, useEffect } from "react";
import { connect, initWallet, switchChain } from "../../lib/auth";
import { getConfig } from "../../lib/config";
import useStore from "../../store";
import { formatAddress, WalletSeed } from "../../utils";
import SideNavigation from "./Sider";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

interface ILayoutNode {
  children?: ReactNode;
}

const Layout: FC<ILayoutNode> = ({ children }) => {
  const state = useStore((state) => state);

  const [isConnected, setIsConnected] = useState(false);
  const [siderOpen, setSiderOpen] = useState(false);

  useEffect(() => {
    setIsConnected(state.isConnected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isConnected]);

  const connectWallet = async () => {
    if (isConnected) return true;
    await connect();
    initWallet(state);
  };
  const handleSwitch = () => {
    return state.activeChain !== getConfig("testnet").hexChainId?.toLowerCase();
  };
  const toggleSiderBar = () => {
    setSiderOpen(!siderOpen);
  };

  const width = `${siderOpen ? "w-[200px]" : "w-[55px]"} fixed z-10`;
  const margin = `p-5 w-full ${siderOpen ? "ml-[200px]" : "ml-[55px]"}`;

  const renderHeader = (): JSX.Element => {
    return (
      <nav className="px-2 sm:px-4 py-2.5 bg-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/images/logo-1.png"
                className="mr-2 w-9 h-9 rounded-full ring-2 ring-blue-400"
                alt="acend Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-600">
                Acend
              </span>
            </div>
          </Link>
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
                  isConnected
                    ? handleSwitch()
                      ? switchChain
                      : () => {}
                    : connectWallet
                }
              >
                {isConnected ? (
                  handleSwitch() ? (
                    "Switch Network"
                  ) : (
                    <div className="inline-flex gap-3">
                      <div className="m-auto">
                        {formatAddress(state.address as string)}
                      </div>
                      <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full">
                        {WalletSeed(state.address as string)}
                      </div>
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
    <div>
      <div className="fixed w-full z-20">{renderHeader()}</div>
      <div className="flex flex-row">
        <div className={width}>
          <SideNavigation toggle={toggleSiderBar} />
        </div>
        <div className={margin}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

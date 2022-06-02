import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useStore from "../../store";

import Footer from "../../components/Landing/Footer/Footer";
import Hero2 from "../../components/Landing/Hero2/Hero";
import Trends from "../../components/Trends";
import Swap from "../../components/Dex/Swap";

import walletManIcon from "../../assets/images/wallet-man.png";
const DEX: NextPage = () => {
  const state = useStore((state) => state);

  const trendData = [
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
    {
      token: "BTC/USDC",
      price: "3920.97",
    },
  ];

  const swapData = [{}];
  return (
    <div className="">
      <Hero2
        title="Acend DEX"
        summary="Swap Coins and Tokens without boundries"
      />
      <Trends tokens={trendData} />
      <Swap />
      <Footer />
    </div>
  );
};

export default DEX;

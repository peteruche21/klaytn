import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../../components/Card/Card";
import Collections from "../../components/Collections";
import Picker from "../../components/Picker";
import Transaction from "../../components/Transaction";
import Market from "../../components/Market";
import style from "./NFT.module.css";

const NFT: NextPage = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Acend</title>
        <meta name="description" content="acend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="chain-picker">
        <Picker name="All Chains" />
      </div>
      <div className="transaction">
        <Transaction />
      </div>
      <div className="collections-market">
        <div className="collections">
          <Collections />
        </div>
        <div className="market">
          <Market />
        </div>
      </div>
      <div className="cards flex justify-center flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default NFT;

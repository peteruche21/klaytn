import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../../components/Card/Card";
import Bridge from "../../components/Bridge";
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
      <div className={style.paddedContainer}>
        <h2 className={style.title}>NFTs Dashboard</h2>
        <div className="chain-picker">
          <Picker name="All Chains" />
        </div>

        <div className="cards flex justify-around flex-wrap mt-6">
          {[...Array(5)].map((data) => (
            <Card />
          ))}
        </div>

        <div className="transaction">
          <Transaction />
        </div>
      </div>
      <div className={style.collections_market}>
        <div className={style.collections}>
          <Collections />
        </div>
        <div className={style.market}>
          <Market />
        </div>
      </div>

      <Bridge />
    </div>
  );
};

export default NFT;

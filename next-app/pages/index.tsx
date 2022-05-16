import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NFTBalance from "../components/Dashboard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Acend</title>
        <meta name="description" content="acend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Klaytn-covalent unified hackathon
        <NFTBalance />
      </main>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Covalent from "../components/testApiCalls";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acend</title>
        <meta name="description" content="acend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Klaytn-covalent unified hackathon
        <Covalent />
      </main>

      <footer className={styles.footer}>
        <p>acend 2022</p>
      </footer>
    </div>
  );
};

export default Home;

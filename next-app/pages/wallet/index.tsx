import type { NextPage } from "next";

import Hero from "../../components/Landing/Hero/Hero";
import Footer from "../../components/Landing/Footer/Footer";
import Chain from "../../components/Wallet/Chain/Chain";
import LineGraph from "../../components/Wallet/LineGraph/LineGraph";
import PieChart from "../../components/Wallet/PieChart/PieChart";
import Transaction from "../../components/Wallet/Transaction/Transaction";
import Bold from "../../components/Wallet/Typography/Bold/Bold";

import style from "./index.module.css";

import useStore from "../../store";
const Wallet: NextPage = () => {
  const store = useStore();
  console.log(store);
  const transactions = store.walletActivity;
  const tokens = store.ERC20Balance;
  return (
    <div className={style.index}>
      <Hero />
      <Bold words="Wallet" />
      <div className={style.charts}>
        <LineGraph datas={tokens} />
        <PieChart datas={tokens} />
      </div>
      <div className={style.walletTracker}>
        <Chain data={tokens} />
        <Transaction data={transactions} />
      </div>

      <Footer />
    </div>
  );
};

export default Wallet;

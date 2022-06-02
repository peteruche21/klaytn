import Image from "next/image";
import React from "react";
import Bold from "../Typography/Bold/Bold";
import style from "./Chain.module.css";
import ethIcon from "../../../assets/images/eth.png";
import chartIcon from "../../../assets/images/chart.png";
function Chain({ data }) {
  return (
    <div className={style.chain}>
      <h3 className={style.title}>All Chains</h3>

      <div className={`${style.tokens} overflow`}>
        <div className={style.header}>
          <h3 className={style.asset}>Assests</h3>
          <h3>Units</h3>
          <h3>Equity</h3>
        </div>

        {data
          .slice(30, 40)
          .map(({ balance, name, symbol, usdPrice, logo }, index) => (
            <div className={style.tokenDetails} key={index}>
              <div className={style.token}>
                <div className={style.tokenImage}>
                  <Image src={logo} width={40} height={40} />
                </div>
                <div className={style.tokenName}>
                  <p>{name}</p>
                  <p className={style.symbol}>{symbol}</p>
                </div>
                <div className={style.chartIcon}>
                  {/* <Image src={chartIcon} /> */}
                </div>
              </div>
              <p>{balance.slice(0, 4)}</p>
              <div className={style.equity}>
                <p>${usdPrice}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Chain;

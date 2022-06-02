import React from "react";
import style from "./Card.module.css";
import Image from "next/image";
import ethIcon from "../../../assets/images/eth.png";
function Card({ data }) {
  const { from, timestamp, to, valueUsd, valueWei, successful } = data;
  return (
    <div className={style.card}>
      <div className={style.actionTime}>
        <p className={style.action}>{successful ? "Successful" : "Failed"}</p>
        <p className={style.time}>{timestamp}</p>
      </div>
      <div className={style.details}>
        <div className={style.token}>
          <div className={style.ethIcon}>
            <Image src={ethIcon} />
          </div>
          <div className={style.tokenName}>
            <p className={style.amount}>{valueWei}</p>
            <p className={style.price}>$ {valueUsd}</p>
          </div>
        </div>
        <div className={style.walletAddress}>
          <p className={style.from}>From</p>
          <p className={style.address}>{from.slice(0, 10)}</p>
        </div>
      </div>
      <h4 className={style.walletId}>Wallet ID: {to}</h4>
    </div>
  );
}

export default Card;

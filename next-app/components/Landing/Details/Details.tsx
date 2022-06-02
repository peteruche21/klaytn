import React from "react";
import Image from "next/image";
import style from "./Details.module.css";
import checkboxIcon from "../../../assets/images/checkbox.png";
function Details() {
  return (
    <div className={style.details}>
      <h1 className={style.details__Title}>
        Your one stop destination for all things <span>Defi</span>
      </h1>
      <p className={style.details__Summary}>
        All your Financial needs decentralized and controlled by you.
      </p>

      <ul className={style.details__Lists}>
        <li>
          <Image src={checkboxIcon} />
          <p>Get Instant loans with flexible repayment and terms. </p>
        </li>
        <li>
          <Image src={checkboxIcon} />
          <p>Lend to earn Interests and tokens. </p>
        </li>
        <li>
          <Image src={checkboxIcon} />
          <p>High Interest rates on all Savings Plans </p>
        </li>
      </ul>

      <button className="button"> Connect Wallect</button>
    </div>
  );
}

export default Details;

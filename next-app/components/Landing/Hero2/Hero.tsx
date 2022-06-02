import React from "react";
import Details2 from "../Details2/Details";
import style from "./Hero.module.css";
import phoneImage from "../../../assets/images/phones.png";
import Image from "next/image";

function Hero({ title, summary, image }) {
  return (
    <div className={style.hero}>
      <div className={style.hero__Details}>
        <Details2 title={title} summary={summary} />
      </div>
      <div className={style.hero__Image}>
        <Image src={image} />
      </div>
    </div>
  );
}

export default Hero;

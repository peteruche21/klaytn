import React from "react";
import Details from "../Details/Details";
import style from "./Hero.module.css";
import phoneImage from "../../../assets/images/phones.png";
import Image from "next/image";

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.hero__Details}>
        <Details />
      </div>
      <div className={style.hero__Image}>
        <Image src={phoneImage} />
      </div>
    </div>
  );
}

export default Hero;

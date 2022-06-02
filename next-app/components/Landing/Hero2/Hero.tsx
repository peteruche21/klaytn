import React from "react";
import Details2 from "../Details2/Details";
import style from "./Hero.module.css";
import phoneImage from "../../../assets/images/phones.png";
import Image from "next/image";

interface IProps {
  title: string;
  summary: string;
  image?: any;
}
function Hero({ title, summary, image }: IProps) {
  return (
    <div className={style.hero}>
      <div className={style.hero__Details}>
        <Details2 title={title} summary={summary} />
      </div>
      <div className={style.hero__Image}>{image && <Image src={image} />}</div>
    </div>
  );
}

export default Hero;

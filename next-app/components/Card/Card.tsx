import React from "react";
import Image from "next/image";
import style from "./Card.module.css";

import NftDetails from "../NftDetails";

import girlNft from "../../assets/images/girl-nft.svg";
function Card(props) {
  const { channel, name, price, bold, img } = props;
  return (
    <div className="max-w-[276px] mx-1 mb-12">
      <Image src={girlNft} />
      <NftDetails name="Two teeth social club" price="price" />
      <NftDetails bold name="Red Ape" price="0.09" img={girlNft} />
    </div>
  );
}

export default Card;

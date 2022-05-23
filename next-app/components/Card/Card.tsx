import React from "react";
import Image from "next/image";
import style from "./Card.module.css";

import NftDetails from "../NftDetails";

import girlNft from "../../assets/images/girl-nft.svg";

const Card = ({ children }) => {
  // const { channel, name, price, bold, img } = props;
  return (
    <div className="w-full max-w-[276px] mx-1 mb-12">
      <div className="block min-w-max h-[300px] m-auto">
        <Image src={girlNft} />
      </div>
      <NftDetails name="Two teeth social club" price="price" />
      <NftDetails name="Red Ape" price="0.09" img={girlNft} />
    </div>
  );
};

export default Card;

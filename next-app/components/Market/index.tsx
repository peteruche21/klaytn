import React from "react";
import style from "./index.module.css";
import NftAbout from "../NftAbout";
import eth from "../../assets/images/eth.svg";

function index() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Market Place</h2>

      <div className={style.header}>
        <div className={style.left}>
          <h4>Top Sales</h4>
          <h4>NFT</h4>
        </div>
        <div className={style.right}>
          <h4>Market Place</h4>
          <h4>Prices</h4>
        </div>
      </div>
      {[...Array(10)].map((data) => (
        <div className={style.grid}>
          <NftAbout img={eth} />
          <div className={style.price}>
            <p>$43.93</p>
            <p className={style.change}>$43.93</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default index;

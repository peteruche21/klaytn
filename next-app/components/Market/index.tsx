import React from "react";
import style from "./index.module.css";
import NftAbout from "../NftAbout";
import eth from "../../assets/images/eth.svg";

function index() {
  return (
    <div>
      <h2>Market Placse</h2>

      <div className={style.header}>
        <h4>Top Sales</h4>
        <h4>Market Place</h4>
        <h4>NFT</h4>
        <h4>Prices</h4>
      </div>
      {[...Array(10)].map((data) => (
        <div className={style.grid}>
          <NftAbout img={eth} />
          <div className={style.price}>
            <p>$43.93</p>
            <p className="mt-4">$43.93</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default index;

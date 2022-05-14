import React from "react";
import NftAbout from "../NftAbout";
import eth from "../../assets/images/eth.svg";
import ape from "../../assets/images/ape.svg";

import style from "./index.module.css";
function index() {
  return (
    <div className={style.container}>
      <h2>Top Collections</h2>

      <div className={style.header}>
        <h4>Collection</h4>
        <h4>Volume</h4>
        <h4>Trader</h4>
        <h4>Sales</h4>
      </div>

      {[...Array(3)].map((data) => (
        <div className={style.grid}>
          <NftAbout img={ape} token={eth} />
          <div className={style.price}>
            <p>$43.93</p>
            <p className="mt-4">$43.93</p>
          </div>
          <div className={style.price}>
            <p>$43.93</p>
            <p className="mt-4">$43.93</p>
          </div>
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

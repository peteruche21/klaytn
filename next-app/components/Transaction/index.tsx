import React from "react";
import Image from "next/image";
import style from "./index.module.css";
import arrowIcon from "../../assets/images/arrow.svg";
import Picker from "../Picker";
function index() {
  return (
    <div className={style.transaction}>
      <h2 className={style.title}>Transaction History</h2>

      <div className={style.transact}>
        <div className={style.transfer}>
          <Picker name="Transfer" />
        </div>
        <div className={style.receive}>
          <Picker name="Receive" />
        </div>
      </div>
    </div>
  );
}

export default index;

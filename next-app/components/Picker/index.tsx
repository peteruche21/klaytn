import React from "react";
import style from "./index.module.css";
import Image from "next/image";
import arrowIcon from "../../assets/images/arrow.svg";
function index({ name, clickFunc }) {
  return (
    <div className={style.picker}>
      <button className={style.button}>
        {name}
        <div className={style.image}>
          <Image src={arrowIcon} alt="arrow" width={10} height={10} />
        </div>
      </button>
    </div>
  );
}

export default index;

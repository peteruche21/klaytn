import React from "react";
import Image from "next/image";
import style from "./Details.module.css";
import checkboxIcon from "../../../assets/images/checkbox.png";
function Details({ title, summary }) {
  return (
    <div className={style.details}>
      <h1 className={style.details__Title}>{title}</h1>
      <p className={style.details__Summary}>{summary}</p>
    </div>
  );
}

export default Details;

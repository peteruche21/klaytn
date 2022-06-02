import React from "react";
import style from "./Card.module.css";
function Card(props) {
  const { token, price } = props;
  return (
    <div className={style.card}>
      <p className={style.token}> {token}</p>
      <p className={style.price}>{price}</p>
    </div>
  );
}

export default Card;

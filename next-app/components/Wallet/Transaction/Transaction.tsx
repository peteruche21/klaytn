import React from "react";
import Card from "./Card";
import style from "./Transaction.module.css";
function Transaction({ data }) {
  return (
    <div className={style.transaction}>
      <h3 className={style.title}>Transaction History</h3>

      <div className={style.filter}>
        <h4>Filter</h4>
      </div>

      <div className={`${style.cards} overflow`}>
        {data?.map((data, index) => (
          <div className={style.card} key={index}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaction;

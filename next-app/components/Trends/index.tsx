import React from "react";
import style from "./index.module.css";
import Card from "./Card";
interface Iprops {
  tokens: { token: string; price: string | number }[];
}
function index(props: Iprops) {
  const { tokens } = props;
  return (
    <div className={style.trends}>
      <h2>Top Trends</h2>

      <div className={style.cards}>
        {tokens.map((token, index) => (
          <div className="" key={index}>
            <Card token={token.token} price={token.price} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;

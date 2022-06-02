import React from "react";
import style from "./index.module.css";
import Input from "./Input";
function index() {
  return (
    <div className={style.swap}>
      <h2 className={style.title}> Swap</h2>
      <div className={style.from}>
        <h3>From</h3>
        <Input amount={0} tokens={["ETH", "Binance"]} />
      </div>
      <div className={style.to}>
        <h3>To</h3>
        <Input amount={0} tokens={["Binance"]} disabled={true} />
      </div>

      <div className={style.submit}>
        <button>Get Quote</button>
      </div>
    </div>
  );
}

export default index;

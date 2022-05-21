import React from "react";
import style from "./Transfer.module.css";
import Modal from "@mui/material/Modal";
import Card from "../Card/Card";
function index() {
  let id = 11;
  return (
    <Modal open={true}>
      <div className={style.modal}>
        <div className={style.header}>
          <h2>Transaction</h2>
          <h2>Transfer</h2>
        </div>
        <div className={style.nft}>
          <Card />
        </div>
        <div className={style.transfer}>
          <input
            type="text"
            className={style.input}
            placeholder="Enter Receiver's address"
          />
          <button className={style.send}>Send</button>
        </div>

        <div className={style.bridges}>
          <button disabled className={style.bridge}>
            Bridge
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default index;

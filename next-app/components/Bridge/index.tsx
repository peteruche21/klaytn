import React, { useState } from "react";
import Image from "next/image";
import Modal from "@mui/material/Modal";

import style from "./Bridge.module.css";
import Picker from "../Picker";
function index() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const transactFunc = () => {
    setOpen(false);
    alert("Transaction Successful");
  };
  return (
    <div className={style.container}>
      <Modal open={open} onClose={handleClose}>
        <div className={style.modal}>
          <button onClick={handleClose} className={style.back}>
            <Image src="/images/back.png" alt="arrow" width={40} height={40} />
          </button>
          <div className={style.transact}>
            <div className={style.transfer}>
              <h3>Transfer from</h3>
              <Picker name="Ethereum" />
            </div>

            <div className="">
              <Image
                src="/images/arrow.png"
                alt="arrow"
                width={100}
                height={10}
              />
            </div>
            <div className={style.transfer}>
              <h3>Transfer from</h3>
              <Picker name="Polygon" />
            </div>
          </div>
          <div className={style.send}>
            <h3>Send</h3>
            <Picker name="Select NFTs" />
          </div>
          <div className={style.send}>
            <h3>Receive</h3>
            <Picker name="Select NFTs" />
          </div>

          <div className={style.transactions}>
            <h3>Transaction Settings</h3>
            <ul className={style.options}>
              <li className={style.option}>
                <h4> Reduction Tolerance</h4>
                <p> 3.00%</p>
              </li>
              <li className={style.option}>
                <h4> Payment</h4>
                <p> 3.00%</p>
              </li>
              <li className={style.option}>
                <h4> Gas Fee Measure</h4>
                <p> 3.00%</p>
              </li>
              <li className={style.option}>
                <h4> Bridge Fee measure</h4>
                <p> 3.00%</p>
              </li>
              <li className={style.option}>
                <h4> Exchange Fee measure</h4>
                <p> 3.00%</p>
              </li>
            </ul>

            <button onClick={transactFunc} className={style.submit}>
              {" "}
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default index;

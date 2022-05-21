import React, { useState } from "react";
import style from "./PickerModel.module.css";
import Modal from "@mui/material/Modal";
function index() {
  const data = [
    { name: "femi" },
    { name: "femi" },
    { name: "femi" },
    { name: "femi" },
  ];
  const header = "Chain";
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal open={open}>
        <div className={style.modal}>
          <div className={style.header}>Select {header}</div>
          <ul className={style.options}>
            {data.map((item) => (
              <li key={index} className={style.option} onClick={handleClick}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default index;

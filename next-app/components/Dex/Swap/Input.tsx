import Image from "next/image";
import React from "react";
import style from "./Input.module.css";

interface IProps {
  amount: number;
  tokens: string[];
  image?: any;
  disabled?: boolean;
}

function Input(props: IProps) {
  const { amount, tokens, image, disabled } = props;
  return (
    <div className={style.input}>
      <select className={style.token}>
        {tokens.map((token, index) => (
          <option value={token}>
            {/* <Image src={image} /> */}
            <p>{token}</p>
          </option>
        ))}
      </select>

      <div className={style.amount}>
        <input
          type="number"
          name=""
          id=""
          placeholder="0.0"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default Input;

import React from "react";
import style from "./Bold.module.css";

interface IProps {
  words: string;
}
function Bold({ words }: IProps): JSX.Element {
  return <h3 className={style.text}>{words}</h3>;
}

export default Bold;

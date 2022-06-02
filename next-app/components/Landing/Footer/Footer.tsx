import style from "./Footer.module.css";
import Image from "next/image";

import acendLogo from "../../../assets/images/acend-footer.png";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.flex}>
        <div className={style.logo}>
          <Image src={acendLogo} />
        </div>
        <div className={style.right}>
          <div className={style.links}>
            <h4> Features</h4>
            <ul className={style.lists}>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
            </ul>
          </div>
          <div className={style.links}>
            <h4> Features</h4>
            <ul className={style.lists}>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
            </ul>
          </div>
          <div className={style.links}>
            <h4> Features</h4>
            <ul className={style.lists}>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
            </ul>
          </div>
          <div className={style.links}>
            <h4> Features</h4>
            <ul className={style.lists}>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
              <li> Acend Defi</li>
            </ul>
          </div>
        </div>
      </div>

      <p className={style.copyright}>Copyright 2022</p>
    </div>
  );
}

export default Footer;

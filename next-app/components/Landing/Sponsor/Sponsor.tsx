import React from "react"
import Image from "next/image"
import style from "./Sponsor.module.css"
import avalanche from "../../../images/avalanche.png"
import checkIcon from "../../../images/checkbox.png"
function Sponsor() {
    return (
        <div className={style.sponsor}>
            <div className={style.left}>
                <h4> Powered By</h4>
                <Image src={avalanche} width={150} height={150} layout="fixed" />
                <h2 className={style.name}> Avalanche</h2>
            </div>

            <div className={style.right}>
                <h4> Why Avalance</h4>
                <ul className={style.lists}>
                    <li>
                        <Image src={checkIcon} /> <p> Low cost and eco-system friendly</p>
                    </li>
                    <li>
                        <Image src={checkIcon} /> <p> Built to tackel interoperability. </p>
                    </li>
                    <li>
                        <Image src={checkIcon} />{" "}
                        <p> Fastest Smart contracts Platform in the blockchain industry.</p>
                    </li>
                    <li>
                        <Image src={checkIcon} />{" "}
                        <p> Handles about 4,500 transactions per second</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sponsor

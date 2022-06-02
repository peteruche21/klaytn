import Image from "next/image"

import style from "./Card.module.css"
import daoImage from "../../../images/dao.png"
import dexImage from "../../../images/dex.png"

function Card({ title, about, image }) {
    return (
        <div className={style.card}>
            <h3 className={style.title}> {title}</h3>

            <p className={style.about}> {about}</p>

            <Image src={image} />
        </div>
    )
}

export default Card

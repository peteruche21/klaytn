import style from "./Grid.module.css"
import Image from "next/image"
function Grid({ title, image, about }) {
    return (
        <div className={style.grid}>
            <h4 className={style.title}> {title}</h4>
            <Image src={image} width={145} height={145} />
            <p className={style.about}>{about} </p>
        </div>
    )
}

export default Grid

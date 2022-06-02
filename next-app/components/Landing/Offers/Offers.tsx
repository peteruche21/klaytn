import React from "react"
import style from "./Offers.module.css"
import yieldImage from "../../../images/yield.png"
import borrowImage from "../../../images/borrow.png"
import stakeImage from "../../../images/stake.png"
import Grid from "../Grid/Grid"
function Offers() {
    return (
        <div className={style.offers}>
            <h4 className={style.title}>
                {" "}
                Do more with <span>Acend </span>
            </h4>

            <div className={style.grids}>
                <Grid
                    title="Yield Farming"
                    image={yieldImage}
                    about="Invest and grow your assets by lending.
                    Get high interest rates and earn TOKENS."
                />
                <Grid
                    title="Borrowing"
                    image={borrowImage}
                    about="Get loans with flexible repayment and terms."
                />
                <Grid
                    title="Staking"
                    image={stakeImage}
                    about="Earn high intersts when you save your assets. Lock your funds in a pool of assets and earn rewards."
                />
            </div>
        </div>
    )
}

export default Offers

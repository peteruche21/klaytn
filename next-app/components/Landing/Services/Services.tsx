import React from "react"
import Card from "../Card/Card"
import style from "./Services.module.css"

import acendImage from "../../../images/dex.png"
import walletImage from "../../../images/phone-man.png"
import dashboardImage from "../../../images/dashboard.png"
import daoImage from "../../../images/dao.png"

function Services() {
    return (
        <div className={style.services}>
            <div className={style.services__Cards}>
                <Card
                    image={acendImage}
                    title="Acend DEX"
                    about="Swap digital assets without boundaries"
                />
                <Card
                    image={walletImage}
                    title="Wallet Tracker"
                    about="See and manage all your De-Fi assets in one place"
                />
                <Card
                    image={dashboardImage}
                    title="NFT Dashboard"
                    about="View Your NFT portfolio across multiple blockchains"
                />
                <Card image={daoImage} title="Acend Dao" about="Your community, Your Rules" />
            </div>
        </div>
    )
}

export default Services

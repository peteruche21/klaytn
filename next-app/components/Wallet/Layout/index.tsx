import React from "react"
import Head from "next/head"
import styles from "../../styles/Home.module.css"
import Navbar from "./Navbar"
import { Layout } from "antd"

const { Header, Footer, Content } = Layout

const AppLayout: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Acend</title>
                <meta name="description" content="One Stop Destination for all things Defi" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Header>
                    <Navbar />
                </Header>
                <Content className={styles.main}>{children}</Content>
                <Footer className={styles.footer}>copyright @2022 Made by Cardinal Labs</Footer>
            </Layout>
        </div>
    )
}

export default AppLayout

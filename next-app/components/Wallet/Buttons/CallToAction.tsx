import React, { useEffect } from "react"
import { Button, Image } from "@chakra-ui/react"
//import Blockie from "../UI/Blockies"
import dappStore from "../../stores/dappStore"
import useCustomToast from "../../hooks/useCustomToast"
import { useMoralis } from "react-moralis"

declare global {
    interface Window {
        ethereum: any
    }
}

function CallToAction() {
    const state = dappStore((state) => state)
    const toast = useCustomToast()
    const {
        isAuthenticated,
        //isAuthenticating,
        authError,
        account,
        isWeb3Enabled,
        isWeb3EnableLoading,
        authenticate,
        enableWeb3,
        logout,
    } = useMoralis()

    const connect = async () => {
        if (!isWeb3Enabled) enableWeb3()
        const connectorId: any = "injected"
        try {
            await authenticate({
                provider: connectorId,
                signingMessage: "authenticate this wallet address with Acend",
            })
            window.localStorage.setItem("connectorId", connectorId)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const connectorId: any = window.localStorage.getItem("connectorId")
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
            enableWeb3({ provider: connectorId })
        }
        if (isWeb3Enabled && isAuthenticated) {
            state.setAddress(account!)
            state.setIsConnected(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isWeb3Enabled])

    return (
        <>
            {isAuthenticated ? (
                <Button borderRadius={5} onClick={logout}>
                    {/* <Blockie /> */}
                    Logout
                </Button>
            ) : (
                <Button
                    borderRadius={5}
                    onClick={() => {
                        window.ethereum
                            ? connect()
                            : toast("warning", "please use a crypto enabled browser!", "cta")
                        if (authError) toast("error", `${authError.message}`, "autherr")
                    }}
                >
                    <Image src="/metamask.png" alt="metamask" width={25} pr={2} /> Connect
                </Button>
            )}
        </>
    )
}

export default CallToAction

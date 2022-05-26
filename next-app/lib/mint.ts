import caver from "./caver"

const MINTER_CONTRACT = process.env.NEXT_PUBLIC_MINTER_CONTRACT
const ethereum = typeof window !== "undefined" ? window.ethereum : undefined;

const mintTokenWithUri = async (uri: string) => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (ethereum && ethereum.isConnected()) {
        const data = caver.klay.abi.encodeFunctionCall(
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_uri",
                        "type": "string"
                    }
                ],
                "name": "mintNft",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            [uri]
        )

        const receipt = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: accounts[0],
                    to: MINTER_CONTRACT,
                    gas: caver.utils.toHex("500000"),
                    gasPrice: caver.utils.toHex("250000000000"),
                    value: caver.utils.toHex(caver.utils.convertToPeb('0.1', 'KLAY')),
                    data
                }
            ],
        })
        return receipt;
    }
    return;
}

export default mintTokenWithUri;
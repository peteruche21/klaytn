import caver from "./caver";

export const transfer = (
  from: string,
  to: string,
  tokenId: number,
  contract: string
) => {
  //assuming the nft is implemented with openzeppelin standards
  const data = caver.klay.abi.encodeFunctionCall(
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    [from, to, tokenId]
  );

  caver.klay
    .sendTransaction({
      type: "SMART_CONTRACT_EXECUTION",
      from: from,
      to: contract,
      gas: "8000000",
      data,
    })
    .on("transactionHash", function (hash) {
      console.log("success: " + hash);
    })
    .on("receipt", function (receipt) {
      console.log(receipt);
    })
    .on("error", console.error);
};

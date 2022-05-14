const axios = require("axios");
import { getConfig } from "./config";

export const query = async (endpoint: string) => {
  const { chainId } = getConfig("testnet");
  const api =
    "https://api.covalenthq.com/v1/" +
    chainId +
    endpoint +
    `/?key=${process.env.COVALENT_API_KEY}`;
  try {
    const res = await axios
      .get(api)
      .then((response: { [key: string]: unknown }) => {
        return response.items;
      });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const axios = require("axios");
import { getConfig } from "./config";

interface IResponse {
  [key: string]: {
    [key: string]: {
      [key: string]: [];
    };
  };
}

export const query = async (endpoint: string) => {
  const { chainId } = getConfig("mainnet");
  const api =
    "https://api.covalenthq.com/v1/" +
    "1" +
    endpoint +
    `key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`;
  try {
    const res = await axios.get(api).then((response: IResponse) => {
      const result = response.data.data.items;
      return result;
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

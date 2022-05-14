import Caver from "caver-js";
import { getConfig } from "./config";

const { ethereum } = window;

const rpc =
  typeof ethereum !== "undefined"
    ? ethereum
    : getConfig("testnet").httpRPCEndpoint;
const caver = new Caver(rpc);

export default caver;

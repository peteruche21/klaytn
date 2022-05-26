const Caver = require("caver-js")
import { getConfig } from "./config";

const rpc = getConfig("testnet").httpRPCEndpoint;
const caver = new Caver(rpc);

export default caver;

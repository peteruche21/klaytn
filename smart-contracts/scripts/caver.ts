import * as dotenv from "dotenv";
import Caver from "caver-js";

dotenv.config();

const caver = new Caver(process.env.BAOBAB_URL);

const privateKey: string = process.env.PRIVATE_KEY as string;

const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey);

caver.klay.accounts.wallet.add(walletInstance);

export default caver;

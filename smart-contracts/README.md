# Getting Started

First, make sure you have cloned this repo:

- add your .env variables

```bash
CYPRESS_URL = xxx
BAOBAB_URL= xxx
PRIVATE_KEY= xxx
REPORT_GAS= <boolean>
```

- hardhat

```bash
yarn hardhat compile
yarn hardhat deploy
npx ts-node scripts/grantRole.ts 0x["minter contract adress ..."]
```

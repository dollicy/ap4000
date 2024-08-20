require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`7f73593f318a5f6b8556a47491a7a2bc9d642261b523ab8b2c9a5ca7023cb2ba`],
    },
  },
};

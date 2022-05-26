require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const ALCHEMY_API_KEY_URL= process.env.ALCHEMY_API_KEY_URL;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 */
module.exports = {

  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [POLYGONSCAN_API_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}

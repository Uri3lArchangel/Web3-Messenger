/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
const INFURA_URL=process.env.INFURA_URL
const PRIVATE_KEY=process.env.PRIVATE_KEY


module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:INFURA_URL,
      accounts:[`0x${PRIVATE_KEY}`],
      chainId:5
    }
  }
};

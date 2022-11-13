/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
const INFURA_URL='https://goerli.infura.io/v3/011b1e17991746548b8fc0eac345158e'
const PRIVATE_KEY='50978bde1aca7794d38e40b42a752731ecec0d331e12a94a97aacae2a5378ddc'


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

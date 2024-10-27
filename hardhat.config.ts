import "@nomicfoundation/hardhat-toolbox";
import {HardhatUserConfig, vars } from "hardhat/config";

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY_1 = vars.get("SEPOLIA_PRIVATE_KEY_1");

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY_1],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  }
}

export default config;

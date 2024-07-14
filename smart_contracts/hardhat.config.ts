import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",

  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://sepolia.drpc.org",
      accounts: ["0xc0142e4190dd1426d41ff845f65a8856b664ade22d58c58f4320df0d3d77b134"]
    },
  },
};

export default config;

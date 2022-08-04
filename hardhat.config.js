require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: ["8350df0eb74e8fdd53505815881ceb7176dd2c50513f3a0b1c39e4cc73cf8826"]
    },
    bscTestnet: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://twilight-dry-lake.bsc-testnet.discover.quiknode.pro/587ba44f7c609716c9e4b09ca8573a9ed51ed5e2/",
      accounts: ["8350df0eb74e8fdd53505815881ceb7176dd2c50513f3a0b1c39e4cc73cf8826"]
    },
  /*  matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


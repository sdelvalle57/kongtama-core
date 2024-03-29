const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const privKey = fs.readFileSync(".privateKey").toString('utf-8');

module.exports = {
  
  test_file_extension_regexp: /.*\.ts$/,
  contracts_directory: "./contracts",
  contracts_build_directory: "./abi",

  networks: {
    dev: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 7500000
    },

    maticdev: {
      provider: () => new HDWalletProvider([privKey], `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      skipDryRun: true
    },

    goerli: {
      provider: () =>  new HDWalletProvider(privKey, "https://goerli.infura.io/v3/8e5ec067748f4952b53d48e37b2b3416"),
      network_id: 5,
      skipDryRun: true
    },

    rinkeby: {
      provider: () =>  new HDWalletProvider(privKey, "https://rinkeby.infura.io/v3/8e5ec067748f4952b53d48e37b2b3416"),
      network_id: 4,
      skipDryRun: true
    },

    matic: {
      provider: () => new HDWalletProvider(privKey, `https://rpc-mainnet.maticvigil.com/v1/9a0990d7123aeffda04630f4814138f97348590d`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 15000000000
    },

    mainnet: {
      provider: () => new HDWalletProvider(privKey, "https://mainnet.infura.io/v3/8e5ec067748f4952b53d48e37b2b3416"),
      port: 80,
      network_id: 1
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,      // Use "0.5.1" you've installed locally with docker (default: false)
      
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: '145C6ZYYECGWTZT2E98YHFSZ6DEGNHSTJK',
    polygonscan: '4D57CBW4IT52QAM8NIJP4P99ZDGR7R2BN2'
  }
}

//

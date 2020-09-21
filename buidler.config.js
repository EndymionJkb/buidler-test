usePlugin("@nomiclabs/buidler-truffle5");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

module.exports = {
  networks: {
    buidlerevm: {
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      gas: 10000000
    },
 },
  solc: {
    version: "0.6.12",
    optimizer: {
      enabled: true,
      runs: 200
    },
  },
  paths: {
    artifacts: "build/artifacts",
  }
};

import hre from "hardhat";

async function main() {
  const publicClient = await hre.viem.getPublicClient()
  const [client] = await hre.viem.getWalletClients()

  console.log((await hre.viem.deployContract("ShillCore")))

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
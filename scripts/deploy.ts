import { ethers } from "hardhat";

async function main() {
  // Use a temporary address for the Oracle if you haven't set up the Netlify one yet
  const oracleAddress = "0xYourAdminWalletAddress"; 

  const Haba = await ethers.getContractFactory("HabaSPow");
  const haba = await Haba.deploy(oracleAddress);

  await haba.waitForDeployment();
  const address = await haba.getAddress();

  console.log("-----------------------------------------------");
  console.log(`GENESIS SUCCESS: HabaCoin deployed to: ${address}`);
  console.log("-----------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

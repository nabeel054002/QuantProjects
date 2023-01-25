// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");

async function main() {
  const token = await ethers.getContractFactory("Token");
  const deployedToken = await token.deploy();
  await deployedToken.deployed();
  console.log("Address of going BatShit is: ", deployedToken.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});//0x853A0f9631A8cA5810c5A24aD20f42Fb4647dDA3

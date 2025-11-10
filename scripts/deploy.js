async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  const BaseToken = await ethers.getContractFactory("BaseToken");
  const token = await BaseToken.deploy(1000);
  await token.waitForDeployment();

  console.log("BaseToken deployed at:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const { expect } = require("chai");

describe("BaseToken", function () {
  let token, owner, addr1;

  beforeEach(async function () {
    const BaseToken = await ethers.getContractFactory("BaseToken");
    [owner, addr1] = await ethers.getSigners();
    token = await BaseToken.deploy("BuilderToken", "BLD", 1000);
    await token.waitForDeployment();
  });

  it("should assign total supply to owner", async function () {
    expect(await token.balanceOf(owner.address)).to.equal(1000);
  });

  it("should transfer tokens between accounts", async function () {
    await token.transfer(addr1.address, 50);
    expect(await token.balanceOf(addr1.address)).to.equal(50);
  });

  it("should approve and allow delegated transfer", async function () {
    await token.approve(addr1.address, 100);
    expect(await token.allowance(owner.address, addr1.address)).to.equal(100);
  });
});

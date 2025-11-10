const { expect } = require("chai");

describe("BaseToken Events", function () {
  let token, owner, addr1;

  beforeEach(async function () {
    const BaseToken = await ethers.getContractFactory("BaseToken");
    [owner, addr1] = await ethers.getSigners();
    token = await BaseToken.deploy(1000);
    await token.waitForDeployment();
  });

  it("should emit Transfer event when tokens are sent", async function () {
    await expect(token.transfer(addr1.address, 100))
      .to.emit(token, "Transfer")
      .withArgs(owner.address, addr1.address, 100);
  });

  it("should update balances correctly", async function () {
    await token.transfer(addr1.address, 50);
    const balance = await token.balanceOf(addr1.address);
    expect(balance).to.equal(50);
  });
});

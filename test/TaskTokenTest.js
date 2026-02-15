const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TaskToken", function () {
    let user
    let owner
    let instance

    
    before(async function () {
        [owner, user] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("TaskToken");
        instance = await Token.deploy(1000);
    });


    it("Should have the correct name and symbol", async function () {
        expect(await instance.name()).to.equal("TaskToken");
        expect(await instance.symbol()).to.equal("TT");
    });


    it("Should have the correct initial supply", async function () {
        expect(await instance.totalSupply()).to.equal(ethers.parseEther("1000"));
    });

});
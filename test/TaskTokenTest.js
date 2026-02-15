const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TaskToken", function () {
    let user
    let owner
    let instance


    beforeEach(async function () {
        [owner, user] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("TaskToken");
        instance = await Token.deploy(ethers.parseEther("1000"));
    });


    it("Should have the correct name and symbol", async function () {
        expect(await instance.name()).to.equal("TaskToken");
        expect(await instance.symbol()).to.equal("TT");
    });


    it("Should have the correct initial supply", async function () {
        expect(await instance.totalSupply()).to.equal(ethers.parseEther("1000"));
    });


    it("Owner should mint tokens to a user", async function () {
        await instance.MintToken(ethers.parseEther("500"), user.address);

        const userBalance = await instance.balanceOf(user.address);
        expect(userBalance).to.equal(ethers.parseEther("500"));

        const totalSupply = await instance.totalSupply();
        expect(totalSupply).to.equal(ethers.parseEther("1500"));
    });


    it("Non-owner cannot mint tokens", async function () {
        await expect(instance.connect(user).MintToken(ethers.parseEther("500"), user.address)).to.be.reverted;
    });


    it("Should transfer token", async function () {

        await instance.transfer(user.address, ethers.parseEther("500"));

        const userBalance = await instance.balanceOf(user.address);
        expect(userBalance).to.equal(ethers.parseEther("500"));

        const ownerBalance = await instance.balanceOf(owner.address);
        expect(ownerBalance).to.equal(ethers.parseEther("500"));
    });


    it("Should burn token", async function () {
        await instance.BurnToken(ethers.parseEther("500"));
        const totalSupply = await instance.totalSupply();
        expect(totalSupply).to.equal(ethers.parseEther("500"));
    })


    it("Shoud return my balance", async function () {
        const balance = await instance.MyBalance();
        expect(balance).to.equal(ethers.parseEther("1000"));
    })


    //Using built-in function
    it("Should burn token.(using built-in method)", async function () {
        await instance.burn(ethers.parseEther("500"));
        const totalSupply = await instance.totalSupply();
        expect(totalSupply).to.equal(ethers.parseEther("500"));
    })
});
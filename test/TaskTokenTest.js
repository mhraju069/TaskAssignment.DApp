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
        await instance.deployed();
    });
});
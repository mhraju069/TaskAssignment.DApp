const hre = require("hardhat")
async function main() {
    const TaskToken = await hre.ethers.getContractFactory("TaskToken")
    console.log('Deploying...')
    const instance = await TaskToken.deploy(1000)
    await instance.waitForDeployment()
    console.log('Deploying success to : ', instance.target)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
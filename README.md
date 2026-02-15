# TaskToken (TT) - Complete Project Documentation

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Solidity](https://img.shields.io/badge/Solidity-0.8.28-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-v2.22.0-yellow)

This project contains a smart contract for an ERC20 token named **TaskToken (TT)** with extended functionality such as **Minting** (Owner only) and **Burning**. It is built using the Hardhat development environment and includes comprehensive tests, deployment scripts, and configuration for the Sepolia test network.

## 📌 Project Overview

This repository demonstrates a complete blockchain development workflow:
- **Smart Contract Development**: Solidity contract implementing ERC20 standard.
- **Testing**: Extensive unit tests using Hardhat and Chai.
- **Deployment**: Scripts to deploy to local and public test networks (Sepolia).
- **Verification**: Configuration for Etherscan contract verification.

## 🚀 Features

The **TaskToken** contract includes the following features:

- **ERC20 Standard**: Fully compliant with the ERC20 token standard.
- **Ownership Control**: Uses OpenZeppelin's `Ownable` to manage administrative permissions.
- **Minting Capability**: The contract owner can mint new tokens to any address using `MintToken(amount, receiver)`.
- **Burning Mechanism**: Any token holder can burn their tokens to reduce the total supply using `BurnToken(amount)` or the standard `burn(amount)`.
- **Balance Inquiry**: A helper function `MyBalance()` allows users to easily check their token balance.

## 🛠 Tech Stack

- **Solidity (v0.8.28)**: Smart contract language.
- **Hardhat**: Development environment for Ethereum software.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **Chai**: Assertion library for testing.
- **OpenZeppelin Contracts**: Library for secure smart contract development.
- **Dotenv**: Module for loading environment variables.

## 📦 Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mhraju069/TaskAssignment.DApp.git
   cd TaskAssignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## ⚙️ Configuration

Create a `.env` file in the root directory to store your sensitive configuration. You can copy the structure below:

```ini
SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"
PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
ETHERSCAN_API_KEY="YOUR_ETHERSCAN_API_KEY"
```

> **Note:** Never commit your `.env` file to version control. It is already included in `.gitignore`.

## 💻 Usage

### Compile Contracts
Compile the smart contracts to generate artifacts:
```bash
npm run compile
# or
npx hardhat compile
```

### Run Tests
Execute the test suite to verify contract logic:
```bash
npm run test
# or
npx hardhat test
```

### Generate Coverage Report
Check the test coverage of your smart contracts:
```bash
npm run coverage
# or
npx hardhat coverage
```

### Deploy to Local Network
Deploy the contract to a local Hardhat network:
```bash
npm run deploy:local
# or
npx hardhat run deploy/scripts.js
```

### Deploy to Sepolia Testnet
Deploy the contract to the Sepolia test network:
```bash
npm run deploy:sepolia
# or
npx hardhat run deploy/scripts.js --network sepolia
```

## 🧪 Testing Report

The project includes a comprehensive test suite in `test/TaskTokenTest.js` covering the following scenarios:

1. **Initialization**: Checks correct Name ('TaskToken'), Symbol ('TT'), and Initial Supply (1000 tokens).
2. **Minting**:
   - Verifies owner can mint tokens.
   - Ensures non-owners CANNOT mint tokens (reverts transaction).
   - Updates total supply correctly after minting.
3. **Transfer**:
   - Updates balances correctly for sender and receiver.
4. **Burning**:
   - Verifies users can burn their own tokens.
   - Updates total supply correctly after burning.
5. **Balance Check**:
   - Verifies `MyBalance()` returns the correct balance for the caller.

## 📂 Project Structure

```
BcTaskAssignment/
├── contracts/
│   └── TaskToken.sol       # Smart contract source code
├── test/
│   └── TaskTokenTest.js    # Unit tests for the contract
├── deploy/
│   └── scripts.js          # Deployment script
├── hardhat.config.js       # Hardhat configuration (Networks, Etherscan, Solidity version)
├── package.json            # Project dependencies and scripts
└── .env                    # Environment variables (ignored by git)
```

## 📜 License

This project is licensed under the **ISC License**.

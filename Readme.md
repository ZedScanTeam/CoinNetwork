# Running a ZEDXION Validator

## Node Setup Steps

### 1. Clone the Repository

Clone the official ZEDXION network repository:
git clone https://github.com/Zedscan/CoinNetwork.git

### 2. Copy Configuration Files

Copy the template configuration for a validator to the root folder:

```
cp -r CoinNetwork/node-template/ZEDXION /root/\
```

### 3. Create an Account

Navigate to the validator folder and grant execution permissions:

```
cd /root/ZEDXION
chmod +x openethereum
```

Create a new account:

```
./openethereum account new --config ./nodes/validator/node.toml
```

Once created, you will receive a public address in the format:  
`0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2`

Copy this address into the appropriate fields in the node.toml file:

```toml
[account]
unlock = ["0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2"]
password = ["password"]

[mining]
force_sealing = true
engine_signer = "0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2"
reseal_on_txs = "none"
```

### 4. Start the Validator Node

Run the following command to start the validator node:

```
./openethereum --config ./nodes/validator/node.toml
```

## How to Retrieve the Private Key

To stake to the consensus contract, you need to import your private key into MetaMask. OpenEthereum generates key files (keystore). To retrieve the private key from the keystore file, use the getPrivateKey.ts script.

### Installing Necessary Dependencies

Ensure that Node.js is installed, then follow these steps:

1. Initialize the project:

```
npm init -y
```

2. Install the required dependencies:

```
npm install ethers dotenv
```

### Script to Retrieve the Private Key

Create a file named getPrivateKey.ts with the following content:

```typescript
import { ethers } from "ethers";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Specify the path to the keystore file
const keystoreFilePath = path.join(__dirname, "keystore-file.json");
const keystorePassword = "your-password";

async function getPrivateKeyFromKeystore() {
  try {
    // Read the keystore file
    const keystoreData = fs.readFileSync(keystoreFilePath, "utf8");

    // Recover wallet using keystore and password
    const wallet = await ethers.Wallet.fromEncryptedJson(
      keystoreData,
      keystorePassword,
    );

    console.log("Private key:", wallet.privateKey);
  } catch (error) {
    console.error("Error getting a private key:", error);
  }
}

getPrivateKeyFromKeystore();
```

### How to Use the Script

1. Place the keystore file in the same folder as getPrivateKey.ts.
2. Update the script with the correct path to your keystore file and replace "your-password" with your password.
3. Run the script:
   ts-node getPrivateKey.ts

4. Once executed, your private key will be displayed.

### Importing the Private Key to MetaMask

1. Open MetaMask.
2. Select "Import Account."
3. Paste the retrieved private key.

## Staking

Send your ZEDXION coins to the consensus contract address from your validator's address.  
**Consensus Contract Address:**  
`0xf39f8f3223aDB78F87836eeD365ca858D876873a`

Steps:

1. Import your private key into MetaMask.
2. Switch to the ZEDXION network.
3. Transfer ZEDXION coins to the consensus contract address.

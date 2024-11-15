import { ethers } from "ethers";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Specify the path to the keystore file
const keystoreFilePath = path.join(__dirname, "keystore-file.json");
const keystorePassword = "yor-password";

async function getPrivateKeyFromKeystore() {
    try {
        // Read the keystore file
        const keystoreData = fs.readFileSync(keystoreFilePath, "utf8");

        // Recover wallet using keystore and password
        const wallet = await ethers.Wallet.fromEncryptedJson(keystoreData, keystorePassword);

        console.log("Приватний ключ:", wallet.privateKey);
    } catch (error) {
        console.error("Помилка при отриманні приватного ключа:", error);
    }
}

getPrivateKeyFromKeystore();

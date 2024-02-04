const crypto = require("crypto");

// Function to encrypt data
function encryptData(data, key) {
  try {
    const encrypt = crypto.createCipher("aes-256-cbc", key);
    let encrypted = encrypt.update(data, "utf8", "hex");
    encrypted += encrypt.final("hex");
    return encrypted;
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Encryption failed");
  }
}

// Function to decrypt data
function decryptData(encryptedData, key) {
  try {
    const decrypt = crypto.createDecipher("aes-256-cbc", key);
    let decrypted = decrypt.update(encryptedData, "hex", "utf8");
    decrypted += decrypt.final("utf8");
    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Decryption failed: " + error.message);
  }
}

module.exports = { encryptData, decryptData };

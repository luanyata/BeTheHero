const crypto = require("crypto");

module.exports = function generateMd5Passwood(pass) {
  return crypto
    .createHash("md5")
    .update(pass)
    .digest("HEX");
};

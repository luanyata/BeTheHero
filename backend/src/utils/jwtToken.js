require("dotenv").config();

const jwt = require("jsonwebtoken");

function createJwt(id) {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 3000
  });
}

function verifyJwt(token) {
  return jwt.verify(token, process.env.SECRET, (err, decode) => {
    return err ? {} : decode;
  })();
}

module.exports = { createJwt, verifyJwt };

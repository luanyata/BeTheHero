require("dotenv").config();

const jwt = require("jsonwebtoken");

function createJwt(id) {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 3000
  });
}

function extractJwt(token) {
  let arrayToken = token.split(" ");

  const userJwt = arrayToken.length > 1 ? arrayToken[1] : arrayToken[0];

  return jwt.decode(userJwt, process.env.SECRET);
}

function verifyJwt(req, res, next) {
  try {
    let token = req.headers.authorization;

    if (!token) return res.status(401).send({ err: "No token provided." });

    token = token.split(" ")[1];

    return jwt.verify(token, process.env.SECRET, (err, decode) => {
      if (err)
        return res.status(500).send({ err: "Failed to authentication." });

      req.userId = decode.id;
      next();
    });
  } catch (err) {
    return res.status(500).send({ err: "Internal Error." });
  }
}

module.exports = { createJwt, extractJwt, verifyJwt };

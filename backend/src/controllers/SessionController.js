const connection = require("../database/connection");
const md5 = require("../utils/generateMd5Password");
const { createJwt } = require("../utils/jwtToken");

module.exports = {
  async create(request, response) {
    const { login, password } = request.body;

    const ong = await connection("ongs")
      .where("login", login)
      .andWhere("password", md5(password))
      .select("id", "name")
      .first();

    if (!ong) {
      return response
        .status(400)
        .json({ error: "invalid username or password" });
    }
    const { id, name } = ong;

    const token = createJwt(id);

    const data = { token, name };

    return response.json(data);
  }
};

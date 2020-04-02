const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");
const md5 = require("../utils/generateMd5Password");

module.exports = {
  async list(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },
  async create(request, response) {
    let { name, login, password, email, whatsapp, city, uf } = request.body;

    password = md5(password);
    const id = generateUniqueId();

    try {
      await connection("ongs").insert({
        id,
        name,
        login,
        password,
        email,
        whatsapp,
        city,
        uf
      });
    } catch (err) {
      return response.status(400).json({ err });
    }

    return response.json({ id });
  }
};

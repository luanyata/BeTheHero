const connection = require("../database/connection");
const { extractJwt } = require("../utils/jwtToken");

module.exports = {
  async listIncidentById(request, response) {
    const ong_id = extractJwt(request.headers.authorization).id;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  }
};

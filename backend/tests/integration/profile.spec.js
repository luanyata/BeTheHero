const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
const { extractJwt } = require("../../src/utils/jwtToken");

const mock = require("./mock");

describe("Profile", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to empy listing incidents", async () => {
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    const userSession = await request(app)
      .post("/session")
      .send(mock.user());

    const { token } = userSession.body;

    const response = await request(app)
      .get("/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(response.body).toEqual([]);
  });

  it("should be able to listing incidents by profile", async () => {
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    const userSession = await request(app)
      .post("/session")
      .send(mock.user());

    const { token } = userSession.body;

    const dataIncident = await request(app)
      .post("/incidents")
      .set("Authorization", `Bearer ${token}`)
      .send(mock.incident());

    const { id } = dataIncident.body;

    const ong_id = extractJwt(token).id;

    const response = await request(app)
      .get("/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(response.body).toEqual([{ id, ong_id, ...mock.incident() }]);
  });
});

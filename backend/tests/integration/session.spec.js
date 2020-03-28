const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

const mock = require("./mock");

describe("Session", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to session", async () => {
    const dataOng = await request(app)
      .post("/ongs")
      .send(mock.ong());

    const ong_id = dataOng.body.id;

    const response = await request(app)
      .post("/session")
      .send({ id: ong_id });

    expect(response.body).toHaveProperty("name");
  });
});

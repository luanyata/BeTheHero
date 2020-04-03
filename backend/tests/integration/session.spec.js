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
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    const response = await request(app)
      .post("/session")
      .send(mock.user());

    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("token");
  });
});

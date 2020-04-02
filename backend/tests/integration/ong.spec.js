const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

const mock = require("./mock");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(mock.ong());

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("should be able to create Ong equals login", async () => {
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    await request(app)
      .post("/ongs")
      .send(mock.ong())
      .expect(400);
  });
});

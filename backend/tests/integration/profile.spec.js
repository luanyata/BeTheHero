const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

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
    const data = await request(app)
      .post("/ongs")
      .send(mock.ong());

    const response = await request(app)
      .get("/profile")
      .set("Authorization", data.body.id);

    expect(response.body).toEqual([]);
  });

  it("should be able to listing incidents by profile", async () => {
    const dataOng = await request(app)
      .post("/ongs")
      .send(mock.ong());

    const ong_id = dataOng.body.id;

    const dataIncident = await request(app)
      .post("/incidents")
      .set("Authorization", ong_id)
      .send(mock.incident());

    const id = dataIncident.body.id;

    const response = await request(app)
      .get("/profile")
      .set("Authorization", ong_id);

    expect(response.body).toEqual([{ id, ong_id, ...mock.incident() }]);
  });
});

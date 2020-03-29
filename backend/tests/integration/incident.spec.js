const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

const mock = require("./mock");

describe("Incidents", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to empty list incident", async () => {
    const response = await request(app)
      .get("/incidents")
      .set("page", 1);

    expect(response.body).toEqual([]);
  });

  it("should be able to list incident", async () => {
    const dataOng = await request(app)
      .post("/ongs")
      .send(mock.ong());

    const ong_id = dataOng.body.id;

    const incident = await request(app)
      .post("/incidents")
      .set("Authorization", ong_id)
      .send(mock.incident());

    const id = incident.body.id;

    const incidents = await request(app).get("/incidents");

    expect(incidents.body).toEqual([{ id, ong_id, ...mock.incidentDB() }]);
  });

  it("should be able to create incident", async () => {
    const ongRes = await request(app)
      .post("/ongs")
      .send(mock.ong());

    const ong_id = ongRes.body.id;

    const response = await request(app)
      .post("/incidents")
      .set("Authorization", ong_id)
      .send(mock.incident());

    expect(response.body).toHaveProperty("id");
    expect(typeof response.body.id).toEqual("number");
  });

  it("should be able to delete incident", async () => {
    const ongRes = await request(app)
      .post("/ongs")
      .send(mock.ong());

    const ong_id = ongRes.body.id;

    const incidentRes = await request(app)
      .post("/incidents")
      .set("Authorization", ong_id)
      .send(mock.incident());

    await request(app)
      .delete(`/incidents/${incidentRes.body.id}`)
      .set("Authorization", ong_id)
      .expect(204);
  });
});

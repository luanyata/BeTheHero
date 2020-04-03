const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
const { extractJwt } = require("../../src/utils/jwtToken");

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
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    const userSession = await request(app)
      .post("/session")
      .send(mock.user());

    const { token } = userSession.body;

    const ong_id = await extractJwt(token).id;

    const incident = await request(app)
      .post("/incidents")
      .set("authorization", `Bearer ${token}`)
      .send(mock.incident());

    const id = incident.body.id;

    const incidents = await request(app).get("/incidents");

    expect(incidents.body).toEqual([{ id, ong_id, ...mock.incidentDB() }]);
  });

  it("should be able to create incident", async () => {
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    const userSession = await request(app)
      .post("/session")
      .send(mock.user());

    const { token } = userSession.body;

    const response = await request(app)
      .post("/incidents")
      .set("authorization", `Bearer ${token}`)
      .send(mock.incident());

    expect(response.body).toHaveProperty("id");
  });

  it("should be able to create incident user not token", async () => {
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    await request(app)
      .post("/session")
      .send(mock.user());

    const response = await request(app)
      .post("/incidents")
      .send(mock.incident())
      .expect(401);

    expect(response.body).toEqual({ err: "No token provided." });
  });

  it("should be able to create incident failed to authentication", async () => {
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    await request(app)
      .post("/session")
      .send(mock.user());

    const response = await request(app)
      .post("/incidents")
      .set("authorization", "321321321")
      .send(mock.incident())
      .expect(500);

    expect(response.body).toEqual({ err: "Failed to authentication." });
  });

  it("should be able to delete incident", async () => {
    await request(app)
      .post("/ongs")
      .send(mock.ong());

    const userSession = await request(app)
      .post("/session")
      .send(mock.user());

    const { token } = userSession.body;

    const incidentRes = await request(app)
      .post("/incidents")
      .set("Authorization", `Bearer ${token}`)
      .send(mock.incident());

    await request(app)
      .delete(`/incidents/${incidentRes.body.id}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(204);
  });
});

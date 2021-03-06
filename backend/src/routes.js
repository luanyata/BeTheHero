const express = require("express");
const { verifyJwt } = require("./utils/jwtToken");

const routes = express.Router();

const {
  incidentValidation,
  ongValidation,
  profileValidation,
  sessionValidation,
} = require("./validations");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.post(
  "/session",
  sessionValidation.createSession(),
  SessionController.create
);

routes.get("/ongs", OngController.list);

routes.post("/ongs", ongValidation.createOng(), OngController.create);

routes.get(
  "/incidents",
  incidentValidation.listIncidents(),
  IncidentController.list
);

routes.post(
  "/incidents",
  verifyJwt,
  incidentValidation.createIncident(),
  IncidentController.create
);

routes.delete(
  "/incidents/:id",
  verifyJwt,
  incidentValidation.deleteIncident(),
  IncidentController.delete
);

routes.get(
  "/profile",
  verifyJwt,
  profileValidation.listIncidentsById(),
  ProfileController.listIncidentById
);

module.exports = routes;

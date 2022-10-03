const express = require("express");
const routes = express.Router();

// routes
// main
routes.use("/", require("./main.routes"));

// turnos
routes.use("/turnos", require("./turnos.routes"));

// user
//routes.use("/usuario", require("./user.routes"));

// api
//routes.use("/api", require("./api/api.routes"));

module.exports = routes;
const express = require("express");

const realstateRouter = require("./realestates.router");
const buyersRouter = require("./buyers.router");
const usersRouter = require("./users.router");

function routerApi(app) {
	const router = express.Router();
	app.use("/api/v1", router);
	router.use("/realestates", realstateRouter);
	router.use("/buyers", buyersRouter);
	router.use("/users", usersRouter);
}

module.exports = routerApi;

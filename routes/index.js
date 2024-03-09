const express = require("express");

const realstateRouter = require("./realestates.router");
const buyersRouter = require("./buyers.router");
const usersRouter = require("./users.router");
const authRouter = require("./auth.router");

function routerApi(app) {
	const router = express.Router();
	app.use("/api/v1", router);
	router.use("/realestates", realstateRouter);
	router.use("/buyers", buyersRouter);
	router.use("/users", usersRouter);
	router.use("/auth", authRouter);
}

module.exports = routerApi;

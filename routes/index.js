const express = require("express");
const passport = require("passport");

const realstateRouter = require("./realestates.router");
const buyersRouter = require("./buyers.router");
const usersRouter = require("./users.router");
const authRouter = require("./auth.router");

function routerApi(app) {
	const router = express.Router();
	app.use("/api/v1", router);
	router.use("/realestates", realstateRouter);
	router.use(
		"/buyers",
		passport.authenticate("jwt", { session: false }),
		buyersRouter
	);
	router.use(
		"/users",
		passport.authenticate("jwt", { session: false }),
		usersRouter
	);
	router.use("/auth", authRouter);
}

module.exports = routerApi;

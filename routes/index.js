const express = require("express");

const realstateRouter = require("./realestates.router");

function routerApi(app) {
	const router = express.Router();
	app.use("/api/v1", router);
	router.use("/realestates", realstateRouter);
}

module.exports = routerApi;

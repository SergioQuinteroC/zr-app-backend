const realstateRouter = require("./realestates.router");

function routerApi(app) {
	app.use("/realestates", realstateRouter);
}

module.exports = routerApi;

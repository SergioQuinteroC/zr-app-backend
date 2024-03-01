const express = require("express");
const cors = require("cors");

const routerApi = require("./routes");

const {
	logErrors,
	errorHandler,
	boomErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ["http://localhost:3000", "http://127.0.0.1:5500"];
const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};

app.use(cors(options));

app.get("/", (req, res) => {
	res.send("Hello world");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});

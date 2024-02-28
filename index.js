const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/realestate", (req, res) => {
	res.json({
		id: 1,
		title: "Lote tal",
		description: "blablabal",
		price: 100,
		images: ["image1", "image2"],
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});

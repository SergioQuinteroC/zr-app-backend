const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/realestate", (req, res) => {
	const { limit, offset } = req.query;
	const realestate = [];

	if (limit & offset) {
		for (let i = 0; i < limit; i++) {
			realestate.push({
				id: i,
				title: faker.lorem.words(),
				description: faker.lorem.paragraph(),
				address: faker.location.streetAddress(),
				price: faker.commerce.price(),
				images: [faker.image.url()],
			});
		}

		res.json(realestate);
	} else {
		for (let i = 0; i < 10; i++) {
			realestate.push({
				id: i,
				title: faker.lorem.words(),
				description: faker.lorem.paragraph(),
				address: faker.location.streetAddress(),
				price: faker.commerce.price(),
				images: [faker.image.url()],
			});
		}
		res.json(realestate);
	}
});

app.get("/realestate/:id", (req, res) => {
	const { id } = req.params;
	res.json({
		id,
		name: "Lote 2",
		description: "blablabal 2",
		price: 1020,
		images: ["image1", "image2"],
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});

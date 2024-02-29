const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
	const { limit, offset } = req.query;
	const realestates = [];

	if (limit & offset) {
		for (let i = 0; i < limit; i++) {
			realestates.push({
				id: i,
				title: faker.lorem.words(),
				description: faker.lorem.paragraph(),
				address: faker.location.streetAddress(),
				price: faker.commerce.price(),
				images: [faker.image.url()],
			});
		}

		res.json(realestates);
	} else {
		for (let i = 0; i < 10; i++) {
			realestates.push({
				id: i,
				title: faker.lorem.words(),
				description: faker.lorem.paragraph(),
				address: faker.location.streetAddress(),
				price: faker.commerce.price(),
				images: [faker.image.url()],
			});
		}
		res.json(realestates);
	}
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	res.json({
		id,
		name: "Lote 2",
		description: "blablabal 2",
		address: "Calle 2",
		price: 1020,
		images: ["image1", "image2"],
	});
});

router.post("/", (req, res) => {
	const newRealstate = req.body;
	res.status(201).json({ message: "created", data: newRealstate });
});

router.patch("/:id", (req, res) => {
	const { id } = req.params;
	const data = req.body;
	res.json({ message: "updated", data: { id, ...data } });
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	res.json({ message: "deleted", id });
});

module.exports = router;

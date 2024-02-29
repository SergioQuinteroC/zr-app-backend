const express = require("express");
const RealestatesService = require("../services/realestates.service");

const router = express.Router();
const service = new RealestatesService();

router.get("/", async (req, res) => {
	const { limit, offset } = req.query;
	if (limit && offset) {
		const realestates = await service.getRealestates(limit, offset);
		res.status(200).json(realestates);
	} else {
		const realestates = await service.getRealestates();
		res.status(200).json(realestates);
	}
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const realestate = await service.getRealestate(parseInt(id));
	if (!realestate) {
		return res.status(404).json({ message: "No encontrado" });
	}
	return res.status(200).json(realestate);
});

router.post("/", async (req, res) => {
	const newRealestate = req.body;
	const createRealestate = await service.createRealestate(newRealestate);
	res.status(201).json({ message: "created", data: createRealestate });
});

router.patch("/:id", async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const updatedRealestate = await service.updateRealestate(
		parseInt(id),
		data
	);
	if (!updatedRealestate) {
		res.status(404).json({ message: "No encontrado" });
	}
	res.status(201).json({ message: "updated", data: updatedRealestate });
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const deleteRealestate = await service.deleteRealestate(parseInt(id));
	if (!deleteRealestate) {
		res.status(404).json({ message: "No encontrado" });
	}
	res.status(200).json({ message: "deleted", id });
});

module.exports = router;

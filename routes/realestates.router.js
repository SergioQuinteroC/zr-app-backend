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
	const estate = await service.getEstate(parseInt(id));
	if (!estate) {
		return res.status(404).json({ message: "No encontrado" });
	}
	return res.status(200).json(estate);
});

router.post("/", async (req, res) => {
	const newEstate = req.body;
	const createEstate = await service.createEstate(newEstate);
	res.status(201).json({ message: "created", data: createEstate });
});

router.patch("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const data = req.body;
		const updateEstate = await service.updateEstate(parseInt(id), data);
		res.status(201).json({ message: "updated", data: updateEstate });
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const deleteEstate = await service.deleteEstate(parseInt(id));
	if (!deleteEstate) {
		res.status(404).json({ message: "No encontrado" });
	}
	res.status(200).json({ message: "deleted", id });
});

module.exports = router;

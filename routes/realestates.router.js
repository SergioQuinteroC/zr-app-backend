const express = require("express");
const RealestatesService = require("../services/realestates.service");

const router = express.Router();
const service = new RealestatesService();

router.get("/", (req, res) => {
	const { limit, offset } = req.query;
	if (limit && offset) {
		const realestates = service.getRealestates(limit, offset);
		res.status(200).json(realestates);
	} else {
		const realestates = service.getRealestates();
		res.status(200).json(realestates);
	}
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	const realestate = service.getRealestate(parseInt(id));
	if (!realestate) {
		return res.status(404).json({ message: "No encontrado" });
	}
	return res.status(200).json(realestate);
});

router.post("/", (req, res) => {
	const newRealestate = req.body;
	const createRealestate = service.createRealestate(newRealestate);
	res.status(201).json({ message: "created", data: createRealestate });
});

router.patch("/:id", (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const updatedRealestate = service.updateRealestate(parseInt(id), data);
	if (!updatedRealestate) {
		res.status(404).json({ message: "No encontrado" });
	}
	res.status(201).json({ message: "updated", data: updatedRealestate });
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	const deleteRealestate = service.deleteRealestate(parseInt(id));
	if (!deleteRealestate) {
		res.status(404).json({ message: "No encontrado" });
	}
	res.status(200).json({ message: "deleted", id });
});

module.exports = router;

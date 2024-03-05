const express = require("express");

const RealestatesService = require("../services/realestates.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
	createEstateSchema,
	updateEstateSchema,
	getEstateSchema,
	queryEstateSchema,
} = require("../schemas/realestate.schema");

const router = express.Router();
const service = new RealestatesService();

router.get(
	"/",
	validatorHandler(queryEstateSchema, "query"),
	async (req, res, next) => {
		try {
			const { limit, offset } = req.query;
			if (limit && offset) {
				const realestates = await service.getRealestates(limit, offset);
				res.status(200).json(realestates);
			} else {
				const realestates = await service.getRealestates();
				res.status(200).json(realestates);
			}
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id",
	validatorHandler(getEstateSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const estate = await service.getEstate(parseInt(id));
			return res.status(200).json(estate);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	"/",
	validatorHandler(createEstateSchema, "body"),
	async (req, res, next) => {
		try {
			const newEstate = req.body;
			const createEstate = await service.createEstate(newEstate);
			res.status(201).json({ message: "created", data: createEstate });
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	validatorHandler(getEstateSchema, "params"),
	validatorHandler(updateEstateSchema, "body"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = req.body;
			const updateEstate = await service.updateEstate(parseInt(id), data);
			res.status(201).json({ message: "updated", data: updateEstate });
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	"/:id",
	validatorHandler(getEstateSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const deleteEstate = await service.deleteEstate(parseInt(id));
			res.status(200).json({ message: "deleted", id: deleteEstate.id });
		} catch (error) {
			next(error);
		}
	}
);

router.get("/:id/buyers", async (req, res, next) => {
	try {
		const { id } = req.params;
		const buyers = await service.getBuyersByEstate(parseInt(id));
		res.status(200).json(buyers);
	} catch (error) {
		next(error);
	}
});

module.exports = router;

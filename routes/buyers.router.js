const express = require("express");

const BuyersService = require("../services/buyers.service");
const validatorHandler = require("../middlewares/validator.handler");

const {
	createBuyerSchema,
	updateBuyerSchema,
	getBuyerSchema,
} = require("../schemas/buyers.schema");

const router = express.Router();
const service = new BuyersService();

router.get("/", async (req, res, next) => {
	try {
		const buyers = await service.find();
		res.status(200).json(buyers);
	} catch (error) {
		next(error);
	}
});

router.post(
	"/",
	validatorHandler(createBuyerSchema, "body"),
	async (req, res, next) => {
		try {
			const newBuyer = req.body;
			const createBuyer = await service.create(newBuyer);
			res.status(201).json(createBuyer);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	validatorHandler(getBuyerSchema, "params"),
	validatorHandler(updateBuyerSchema, "body"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const changes = req.body;
			const updateBuyer = await service.updateBuyer(id, changes);
			res.status(200).json(updateBuyer);
		} catch (error) {
			next(error);
		}
	}
);

router.delete("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const deleteBuyer = await service.deleteBuyer(id);
		res.status(200).json(deleteBuyer);
	} catch (error) {
		next(error);
	}
});

module.exports = router;

const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class BuyersService {
	constructor() {}

	async find() {
		const rta = await models.Buyers.findAll();
		return rta;
	}

	async findOne(id) {
		const buyer = await models.Buyers.findByPk(id);

		if (!buyer) {
			throw boom.notFound("Buyer not found");
		}
		return buyer;
	}

	async create(buyer) {
		const newBuyer = await models.Buyers.create(buyer);
		return newBuyer;
	}

	async updateBuyer(id, changes) {
		const buyer = await models.Buyers.findByPk(id);
		const rta = await buyer.update({ ...changes, updatedAt: new Date() });
		return rta;
	}

	async deleteBuyer(id) {
		const buyer = await models.Buyers.findByPk(id);
		await buyer.destroy();
		return { id };
	}
}

module.exports = BuyersService;

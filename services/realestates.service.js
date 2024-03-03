const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class RealestatesService {
	constructor() {}

	async getRealestates(limit, offset) {
		if (limit && offset) {
			const rta = await models.RealEstate.findAndCountAll({
				limit,
				offset,
			});
			return rta;
		}

		const rta = await models.RealEstate.findAll();
		return rta;
	}

	async getEstate(id) {
		const estate = await models.RealEstate.findByPk(id);

		if (!estate) {
			throw boom.notFound("Realestate not found");
		}
		return estate;
	}

	async createEstate(realestate) {
		const newEstate = await models.RealEstate.create(realestate);
		return newEstate;
	}

	async updateEstate(id, changes) {
		const estate = await models.RealEstate.findByPk(id);
		const rta = await estate.update({ ...changes, updatedAt: new Date() });
		return rta;
	}

	async deleteEstate(id) {
		const estate = await models.RealEstate.findByPk(id);
		await estate.destroy();
		return { id };
	}

	async getBuyersByEstate(id) {
		const estate = await models.RealEstate.findByPk(id, {
			include: ["buyers"],
		});
		return estate;
	}
}

module.exports = RealestatesService;

const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class RealestatesService {
	constructor() {
		this.realestates = [];
		this.generateRealestates();
	}

	generateRealestates() {
		for (let i = 0; i < 10; i++) {
			this.realestates.push({
				id: i,
				title: faker.lorem.words(),
				description: faker.lorem.paragraph(),
				address: faker.location.streetAddress(),
				price: faker.commerce.price(),
				images: [faker.image.url()],
			});
		}
	}

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
		const realestate = this.realestates.find(
			(realestate) => realestate.id === id
		);
		if (!realestate) {
			throw boom.notFound("Realestate not found");
		}
		return realestate;
	}

	async createEstate(realestate) {
		const newRealestate = {
			id: this.realestates.length,
			...realestate,
		};
		this.realestates.push(newRealestate);
		return newRealestate;
	}

	async updateEstate(id, realestate) {
		const index = this.realestates.findIndex(
			(realestate) => realestate.id === id
		);
		if (index === -1) {
			throw boom.notFound("Realestate not found");
		}
		const updatedRealestate = {
			...this.realestates[index],
			...realestate,
		};
		this.realestates[index] = updatedRealestate;
		return updatedRealestate;
	}

	async deleteEstate(id) {
		const index = this.realestates.findIndex(
			(realestate) => realestate.id === id
		);
		if (index === -1) {
			throw boom.notFound("Realestate not found");
		}
		this.realestates.splice(index, 1);
		return { id };
	}
}

module.exports = RealestatesService;

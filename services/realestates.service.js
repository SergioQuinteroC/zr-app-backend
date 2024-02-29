const { faker } = require("@faker-js/faker");

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

	getRealestates(limit, offset) {
		if (limit && offset) {
			return this.realestates.slice(offset, offset + limit);
		}
		return this.realestates;
	}

	getRealestate(id) {
		return this.realestates.find((realestate) => realestate.id === id);
	}

	createRealestate(realestate) {
		const newRealestate = {
			id: this.realestates.length,
			...realestate,
		};
		this.realestates.push(newRealestate);
		return newRealestate;
	}

	updateRealestate(id, realestate) {
		const index = this.realestates.findIndex(
			(realestate) => realestate.id === id
		);
		if (index === -1) {
			throw new Error("Realestate not found");
		}
		const updatedRealestate = { ...this.realestates[index], ...realestate };
		this.realestates[index] = updatedRealestate;
		return updatedRealestate;
	}

	deleteRealestate(id) {
		const index = this.realestates.findIndex(
			(realestate) => realestate.id === id
		);
		if (index === -1) {
			throw new Error("Realestate not found");
		}
		this.realestates.splice(index, 1);
		return { id };
	}
}

module.exports = RealestatesService;

"use strict";

const {
	RealEstateSchema,
	REALESTATE_TABLE,
} = require("../models/realestate.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.createTable(REALESTATE_TABLE, RealEstateSchema);
	},

	async down(queryInterface) {
		await queryInterface.drop(REALESTATE_TABLE);
	},
};

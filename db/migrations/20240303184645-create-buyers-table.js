"use strict";

const { BuyersSchema, BUYERS_TABLE } = require("../models/buyers.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.createTable(BUYERS_TABLE, BuyersSchema);
	},

	async down(queryInterface) {
		await queryInterface.drop(BUYERS_TABLE);
	},
};

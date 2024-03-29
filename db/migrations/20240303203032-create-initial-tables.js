"use strict";

const {
	RealEstateSchema,
	REALESTATE_TABLE,
} = require("../models/realestate.model");

const { BuyersSchema, BUYERS_TABLE } = require("../models/buyers.model");

const {
	RealEstateBuyersSchema,
	REALESTATE_BUYERS_TABLE,
} = require("../models/realestate-buyers.model");

const { UserSchema, USER_TABLE } = require("./../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(REALESTATE_TABLE, RealEstateSchema);
		await queryInterface.createTable(BUYERS_TABLE, BuyersSchema);
		await queryInterface.createTable(
			REALESTATE_BUYERS_TABLE,
			RealEstateBuyersSchema
		);
		await queryInterface.createTable(USER_TABLE, UserSchema);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(REALESTATE_TABLE);
		await queryInterface.dropTable(BUYERS_TABLE);
		await queryInterface.dropTable(REALESTATE_BUYERS_TABLE);
		await queryInterface.dropTable(USER_TABLE);
	},
};

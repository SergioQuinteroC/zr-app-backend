const { RealEstateModel, RealEstateSchema } = require("./realestate.model");
const { BuyersModel, BuyersSchema } = require("./buyers.model");

function setupModels(sequelize) {
	RealEstateModel.init(RealEstateSchema, RealEstateModel.config(sequelize));
	BuyersModel.init(BuyersSchema, BuyersModel.config(sequelize));
}

module.exports = setupModels;

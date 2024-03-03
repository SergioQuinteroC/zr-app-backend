const { RealEstateModel, RealEstateSchema } = require("./realestate.model");
const { BuyersModel, BuyersSchema } = require("./buyers.model");
const {
	RealEstateBuyersModel,
	RealEstateBuyersSchema,
} = require("./realestate-buyers.model");

function setupModels(sequelize) {
	RealEstateModel.init(RealEstateSchema, RealEstateModel.config(sequelize));
	BuyersModel.init(BuyersSchema, BuyersModel.config(sequelize));
	RealEstateBuyersModel.init(
		RealEstateBuyersSchema,
		RealEstateBuyersModel.config(sequelize)
	);

	RealEstateModel.associate(sequelize.models);
	BuyersModel.associate(sequelize.models);
}

module.exports = setupModels;

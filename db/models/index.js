const { RealEstateModel, RealEstateSchema } = require("./realestate.model");
const { BuyersModel, BuyersSchema } = require("./buyers.model");
const {
	RealEstateBuyersModel,
	RealEstateBuyersSchema,
} = require("./realestate-buyers.model");
const { UserModel, UserSchema } = require("./user.model");

function setupModels(sequelize) {
	RealEstateModel.init(RealEstateSchema, RealEstateModel.config(sequelize));
	BuyersModel.init(BuyersSchema, BuyersModel.config(sequelize));
	RealEstateBuyersModel.init(
		RealEstateBuyersSchema,
		RealEstateBuyersModel.config(sequelize)
	);
	UserModel.init(UserSchema, UserModel.config(sequelize));

	RealEstateModel.associate(sequelize.models);
	BuyersModel.associate(sequelize.models);
}

module.exports = setupModels;

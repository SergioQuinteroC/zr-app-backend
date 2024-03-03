const { RealEstateModel, RealEstateSchema } = require("./realestate.model");

function setupModels(sequelize) {
	RealEstateModel.init(RealEstateSchema, RealEstateModel.config(sequelize));
}

module.exports = setupModels;

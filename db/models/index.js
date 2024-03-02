const { RealEstateModel, RealEstateSchema } = require("./realestate");

function setupModels(sequelize) {
	RealEstateModel.init(RealEstateSchema, RealEstateModel.config(sequelize));
}

module.exports = setupModels;

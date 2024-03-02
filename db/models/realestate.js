const { Model, DataTypes, Sequelize } = require("sequelize");

const REALESTATE_TABLE = "real_estate";

const RealEstateSchema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	images: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: false,
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.fn("now"),
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.fn("now"),
	},
};

class RealEstateModel extends Model {
	static associate(models) {
		// define relationships here
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: REALESTATE_TABLE,
			modelName: "RealEstate",
			timestamps: false,
		};
	}
}

module.exports = { REALESTATE_TABLE, RealEstateSchema, RealEstateModel };

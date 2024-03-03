const { Model, DataTypes, Sequelize } = require("sequelize");

const { REALESTATE_TABLE } = require("./realestate.model");
const { BUYERS_TABLE } = require("./buyers.model");

const REALESTATE_BUYERS_TABLE = "realestate_buyers";

const RealEstateBuyersSchema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	realEstateId: {
		field: "real_estate_id",
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: REALESTATE_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
	buyerId: {
		field: "buyer_id",
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: BUYERS_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "SET NULL",
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
		field: "created_at",
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
		field: "updated_at",
	},
};

class RealEstateBuyersModel extends Model {
	static associate(models) {}

	static config(sequelize) {
		return {
			sequelize,
			tableName: REALESTATE_BUYERS_TABLE,
			modelName: "RealestateBuyers",
			timestamps: false,
		};
	}
}

module.exports = {
	RealEstateBuyersModel,
	RealEstateBuyersSchema,
	REALESTATE_BUYERS_TABLE,
};

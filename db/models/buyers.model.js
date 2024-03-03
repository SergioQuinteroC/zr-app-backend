const { Model, DataTypes, Sequelize } = require("sequelize");

const BUYERS_TABLE = "buyers";

const BuyersSchema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		field: "last_name",
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
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

class BuyersModel extends Model {
	static associate(models) {
		// define relationships here
	}
	static config(sequelize) {
		return {
			sequelize,
			tableName: BUYERS_TABLE,
			modelName: "Buyers",
			timestamps: false,
		};
	}
}

module.exports = { BUYERS_TABLE, BuyersSchema, BuyersModel };

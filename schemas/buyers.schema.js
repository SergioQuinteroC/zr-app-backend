const Joi = require("joi");

const id = Joi.string().id();
const name = Joi.string().alphanum();
const lastName = Joi.string();
const phone = Joi.string();

const createBuyerSchema = Joi.object({
	name: name.required(),
	lastName: lastName,
	phone: phone.required(),
});

const updateBuyerSchema = Joi.object({
	name: name,
	lastName: lastName,
	phone: phone,
});

const getBuyerSchema = Joi.object({
	id: id.required(),
});

module.exports = { createBuyerSchema, updateBuyerSchema, getBuyerSchema };

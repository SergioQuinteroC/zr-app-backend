const Joi = require("joi");

const id = Joi.string().id();
const title = Joi.string();
const description = Joi.string();
const address = Joi.string();
const price = Joi.number();
const images = Joi.array().items(Joi.string());

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createEstateSchema = Joi.object({
	title: title.required(),
	description: description.required(),
	address: address.required(),
	price: price.required(),
	images: images.required(),
});

const updateEstateSchema = Joi.object({
	title: title,
	description: description,
	address: address,
	price: price,
	images: images,
});

const getEstateSchema = Joi.object({
	id: id.required(),
});

const queryEstateSchema = Joi.object({
	limit,
	offset,
});

module.exports = { createEstateSchema, updateEstateSchema, getEstateSchema, queryEstateSchema };

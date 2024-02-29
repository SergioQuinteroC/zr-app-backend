const Joi = require("joi");

const id = Joi.string().uuid();
const title = Joi.string().alphanum();
const description = Joi.string();
const address = Joi.string();
const price = Joi.number();
const images = Joi.array().items(Joi.string());

const createEstateSchema = Joi.object({
	title: title.required(),
	description: description.required(),
	address: address.required(),
	price: price.required(),
	images: images.required(),
});

const updateEstate = Joi.object({
	title: title,
	description: description,
	address: address,
	price: price,
	images: images,
});

const getEstate = Joi.object({
	id: id.required(),
});

module.exports = { createEstateSchema, updateEstate, getEstate };

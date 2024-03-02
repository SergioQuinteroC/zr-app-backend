const { Client } = require("pg");

async function getConnection() {
	const client = new Client({
		host: "",
		port: "",
		user: "",
		password: "",
		database: "",
	});

	await client.connect();
	return client;
}

module.exports = getConnection;

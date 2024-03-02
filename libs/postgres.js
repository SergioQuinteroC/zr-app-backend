const { Client } = require("pg");

async function getConnection() {
	const client = new Client({
		host: "localhost",
		port: 5432,
		user: "admin",
		password: "IqHp0812",
		database: "realestate",
	});

	await client.connect();
	return client;
}

module.exports = getConnection;

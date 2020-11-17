const bcrypt = require("bcryptjs");

const users = [
	{
		name: "Admin User",
		email: "email@example.com",
		password: bcrypt.hashSync("12345", 10),
	},
	{
		name: "John Doe",
		email: "john@example.com",
		password: bcrypt.hashSync("12345", 10),
	},
	{
		name: "Jane Doe",
		email: "jane@example.com",
		password: bcrypt.hashSync("12345", 10),
	},
];

module.exports = users;

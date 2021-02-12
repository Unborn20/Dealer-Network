const mysql = require('mysql');
const migration = require('mysql-migrations');
require('dotenv').config();

const conn = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

migration.init(conn, __dirname, () => {
	console.log('Finished running all migrations');
});

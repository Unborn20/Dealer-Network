const mysql = require('mysql2');
const migration = require('mysql-migrations');
require('dotenv').config({ path: '.env' })

const connection = mysql.createPool({
  connectionLimit : 2,
  host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

migration.init(connection, __dirname + '/Migrations', () => {
  console.log("Finished running migrations");
});
require('dotenv').config();

const mysql = require('mysql');
const migration = require('mysql-migrations');

const connection = mysql.createPool({
  connectionLimit : 10,
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

migration.init(connection, __dirname + '/Migrations', function() {
  console.log("finished running migrations");
});

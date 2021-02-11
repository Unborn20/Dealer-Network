const mysql = require('mysql');
const migration = require('mysql-migrations');

const conn = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: '', /*Let empty if you don't have password*/
	database: 'dealer_network_DB'
});

migration.init(conn, __dirname, () => {
	console.log('Finished running all migrations');
});

const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dealer_network_DB'
});

con.connect(function(err){
	if (err) throw err;
	console.log('Connected to Data Base');
});

module.exports = con;

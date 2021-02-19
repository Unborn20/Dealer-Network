'use strict';
const pool = require('../Connection_DB/connection');

class SaleDAO{
	
	constructor(){}

	async saleVehicle(sale){
		try{
			const sql = `INSERT INTO sales SET ?`;
			await pool.query(sql, sale);
			return {msg: 'Success: Sale complete succesfully'};
		}catch(err){
			throw err;
		}
	}

}

module.exports = SaleDAO;

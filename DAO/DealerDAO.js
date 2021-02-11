'use strict';
const con = require('../Connection_DB/connection');

class DealerDAO{

	constructor(newDealer){
		this.newDealer = newDealer;
	}

	static async showDealers(){
		const sql = `SELECT dealerName, phone, address FROM dealers`;
		return new Promise((resolve, reject) => {
			con.query(sql, (err, result) => {		
				if (err) reject(err);	
				if (result.length == 0) resolve({msg: 'No dealers records'});
				resolve({result, totalRecords: result.length});
			});			
		});
	}

	async registerNewDealer(){
		const sql = `INSERT INTO dealers SET ?`;
		return new Promise((resolve, reject) => {
			con.query(sql, this.newDealer, (err) => {
				if (err) reject(err);
				resolve({msg: 'Success: Dealer registered correctly'});
			});
		});
	}

}

module.exports = DealerDAO;

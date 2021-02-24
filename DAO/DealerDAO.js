'use strict';
const pool = require('../Connection_DB/connection');
const consultIfExists = require('../Helpers/consultIfExists');

class DealerDAO{

	constructor(){}

	static async showDealers(){
		try{
			const sql = `SELECT dealerName, phone, address FROM dealers`;
			const [dealers] = await pool.execute(sql);
			return {dealers, toalRecord: dealers.length};	
		}catch(err){
			throw err;
		}
	}

	async registerNewDealer(dealer){
		try{
			const sql =`INSERT INTO dealers SET ?`;
			const consultDealer = 'SELECT * FROM dealers WHERE phone = ? AND address = ?';
			const dealerExists = await consultIfExists(consultDealer, [dealer.phone, dealer.address]);
			if(!dealerExists){
				await pool.query(sql, dealer);
				return false;
			}
			return true;
		}catch(err){
			throw err;
		}
	}

}

module.exports = DealerDAO;

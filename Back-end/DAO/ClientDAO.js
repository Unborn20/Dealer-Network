'use strict';
const pool = require('../Connection_DB/connection');
const consultIfExists = require('../Helpers/consultIfExists');

class ClientDAO{

	constructor(){}

	static async showAllClients(){
		try{
			const sql = `SELECT name, phone, address FROM clients`;
			const [clients] = await pool.query(sql);
			return {clients, totalRecords: clients.length};
		}catch(err){
			throw err;
		}
	}

	async registerNewClient(client){
		try{
			const sql = `INSERT INTO clients SET ?`;
			const consultClient = 'SELECT * FROM clients WHERE phone = ?';
			const clientExist = await consultIfExists(consultClient, [client.phone]);
			if(!clientExist){
				await pool.query(sql, client);
				return true;
			}
			return false;
		}catch(err){
			throw err;
		}
	}	

}

module.exports = ClientDAO;

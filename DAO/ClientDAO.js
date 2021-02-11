const con = require('../Connection_DB/connection');

class ClientDAO{

	constructor(newClient){
		this.newClient = newClient;
	}

	static async showAllClients(){
		const sql = `SELECT name, phone, address FROM clients`;
		return new Promise((resolve, reject) => {
			con.query(sql, (err, result) => {
				if (err) reject(err);
				if (result.length == 0) resolve({msg: 'No clients records'});
				resolve({result, totalRecords: result.length});
			});
		});
	}

	async registerNewClient(){
		const sql = `INSERT INTO clients SET ?`;
		return new Promise((resolve, reject) => {
				this.consultIfClientExists(this.newClient.phone)
				.then(result => {
					if(!result){
						con.query(sql, this.newClient, (err) => {
							if (err) reject(err);
						});
						resolve({msg: 'Success: Client registered correctly'});							
					}
					resolve({msg: 'Warning: This client exists already'});
				}).catch(err => new Error(err));			
		});	
	}

	async consultIfClientExists(phone){
		const sql = `SELECT * FROM clients WHERE phone = ?`;
		return new Promise((resolve, reject) => {
			con.query(sql, phone, (err, result) => {
				if (err) reject(err);
				if (result.length) resolve(true);
				resolve(false);
			});
		});
	}

}

module.exports = ClientDAO;

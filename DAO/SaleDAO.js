const con = require('../Connection_DB/connection');

class SaleDAO{
	
	constructor(newSale){
		this.newSale = newSale;
	}

	async saleVehicle(){
		const sql = `INSERT INTO sales SET ?`;
		return new Promise((resolve, reject) => {
			con.query(sql, this.newSale, (err) => {
				if (err) reject(err);
				resolve({msg: 'Success: Sale registred successfully'});
			});
		});
	}

}

module.exports = SaleDAO;

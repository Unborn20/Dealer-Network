const pool = require('../Connection_DB/connection');

async function consultIfExists(sql, condition){
	const [result] = await pool.query(sql, condition);	
	if(!result.length){
		return false; 
	}
	return true;
}

module.exports = consultIfExists;


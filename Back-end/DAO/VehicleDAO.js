'use strict';
const pool = require('../Connection_DB/connection');

class VehicleDAO{

	constructor(){}

	async registerNewVehicle(vehicle){
		try{
			const sql = `INSERT INTO vehicles SET ?`;
			await pool.query(sql, vehicle);
		}catch(err){
			throw err;
		}
	}

	static async showMostRecentVehicles(){
		try{
			const sql = `SELECT brand, model, price FROM vehicles ORDER BY model DESC`;
			const [recentVehicles] = await pool.query(sql);
			return {recentVehicles, totalRecords: recentVehicles.length};
		}catch(err){
			throw err;
		}
	}

	async showVehiclesByAbovePrice(limit){
		try{
			const sql = `SELECT brand, model, price FROM vehicles WHERE price >= ? ORDER BY price DESC`;
			const [vehicles] = await pool.query(sql, limit);
			return {vehicles, totalRecords: vehicles.length};
		}catch(err){
			throw err;
		}
	}

	static async showCheaperVehicle(){
		try{
			const sql = `SELECT * FROM getCheaperVehicle`;
			const [cheaperVehicle] = await pool.query(sql);
			return {cheaperVehicle};
		}catch(err){
			throw err;
		}
	}

	async showMostSaleVehicleByDealer(dealer){
		try{
			const sql = `CALL getMostSoldByDealer(?)`;
			const [result] = await pool.query(sql, dealer);
			if(!result[0].length){
				return {msg: 'No records found'};
			}
			return {mostSaleVehicle: result[0]};
		}catch(err){
			throw err;
		}
	}

}

module.exports = VehicleDAO;

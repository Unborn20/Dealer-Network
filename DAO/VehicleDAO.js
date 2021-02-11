'use strict';
const con = require('../Connection_DB/connection');

class VehicleDAO{

	constructor(newVehicle){
		this.newVehicle = newVehicle;
	}

	async registerNewVehicle(){
		const sql = `INSERT INTO vehicles SET ?`;
		return new Promise((resolve, reject) => {
			con.query(sql, this.newVehicle, (err) => {
				if (err) reject(err);
				resolve({msg: 'Success: Vehicle registered correctly'});
			});
		});
	}

	static async showMostRecentVehicles(){
		const sql = `SELECT brand, model, price FROM vehicles ORDER BY model DESC`;
		return new Promise((resolve, reject) => {
			con.query(sql, (err, result) => {
				if (err) reject(err);
				resolve({result, totalRecords: result.length});
			});
		});
	}

	async showVehiclesByAbovePrice(limit){
		const sql = `SELECT brand, model, price FROM vehicles WHERE price >= ? ORDER BY price DESC`;
		return new Promise((resolve, reject) => {
			con.query(sql, limit, (err, result) => {
				if (err) reject(err);
				resolve({result, totalRecords: result.length});
			});
		});
	}

	static async showCheaperVehicle(){
		const sql = `SELECT brand, price, dealerName AS dealer FROM vehicles INNER JOIN dealers ON vehicles.dealerCode = dealers.nit ORDER BY price ASC LIMIT 1`;
		return new Promise((resolve, reject) => {
			con.query(sql, (err, result) => {
				if (err) reject(err);
				resolve(result);
			});
		});
	}

	async showMostSaleVehicleByDealer(dealer){
		const sql = `CALL getMostSoldByDealer(?)`;
		return new Promise((resolve, reject) => {
			con.query(sql, dealer, (err, result) => {
				if (err) reject(err);
				if (result[0].length == 0) resolve({msg: 'No records found'});
				resolve(result[0])
			});
		});
	}

}

module.exports = VehicleDAO;

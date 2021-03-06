'use strict';
const pool = require('../Connection_DB/connection');
const consultIfExists = require('../Helpers/consultIfExists');

class UserDAO{

	constructor(){}

	async saveUser(user){
		try{
			const insertUser = 'INSERT INTO users SET ?';
			const consultUser = 'SELECT * FROM users WHERE email = ?';
			const userExists = await consultIfExists(consultUser, user.email);
			if (userExists){
				return true;
			}
			await pool.query(insertUser, user);
			return false;
		}catch(err){
			throw err;
		}
	}

	async login(email){
		try{		
			const sql = 'SELECT userName, email, userPassword, roleId FROM users WHERE email = ?';			
			const [user] = await pool.query(sql, [email]);
			if(!user.length){
				return false;
			}
			return user[0];
		}catch(err){
			throw err;
		}
	}

	async findUser(idUser){
		try{
			const sql = 'SELECT idusers, userName, email, roleId FROM users WHERE idusers = ?';
			const [user] = await pool.query(sql, idUser);
			return user[0];
		}catch(err){
			throw err;
		}
	}

	async changeRole(user){
		try{
			const {idusers, userName: name, roleId} = user;
			const sql = 'UPDATE users SET roleId = ? WHERE idusers = ?';
			await pool.query(sql, [roleId, idusers]);
			return name;
		}catch(err){
			throw err;
		}
	}

}

module.exports = UserDAO;

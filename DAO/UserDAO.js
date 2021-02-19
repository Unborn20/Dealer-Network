'use strict';
const pool = require('../Connection_DB/connection');
const bcrypt = require('bcrypt');
const consultIfExists = require('../Helpers/consultIfExists');

class UserDAO{

	constructor(){}

	async saveUser(user){
		try{
			const sql = 'INSERT INTO users SET ?';
			const consultUser = 'SELECT * FROM users WHERE email = ?';
			const userExists = await consultIfExists(consultUser, user.email);
			if (userExists){
				return {msg: 'Warning: This user exists already'};
			}
			await pool.query(sql, user);
			return {msg: 'User registered successfully'};
		}catch(err){
			throw err;
		}
	}

	async login(crendentials){
		try{
			const {email, password} = crendentials;
			const sql = 'SELECT userName, email, roleId FROM users WHERE email = ? AND userPassword = ?';
			const [user] = await pool.query(sql, [email, password]);
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

	async changeToAdminRole(user){
		try{
			const {idusers, userName, roleId} = user;
			const sql = 'UPDATE users SET roleId = ? WHERE idusers = ?';
			await pool.query(sql, [roleId, idusers]);
			return {msg: `Success: ${userName} now is Admin`};
		}catch(err){
			throw err;
		}
	}

}

module.exports = UserDAO;

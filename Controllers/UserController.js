'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const UserDAO = require('../DAO/UserDAO');

class UserController{

	constructor(){}

	async saveNewUser(user){
		const userModel = new User();
		const userDAO = new UserDAO();
		userModel.userName = user.name;
		userModel.email = user.email;
		userModel.userPassword = user.password;
		return await userDAO.saveUser(userModel);
	}

	async login(credentials){
		const userDAO = new UserDAO();
		const user = await userDAO.login(credentials);
		if(!user){
			return {msg: 'This user doesn\'t exists'};
		}
		const seed = process.env.SEED;
		const expiresIn = process.env.EXPIRES_TOKEN_DATE;
		const token = jwt.sign({user}, seed, {expiresIn});
		return {msg: `Welcome ${user.userName}`, token};
	}

	async changeRole(idUser){
		const userDAO = new UserDAO();
		const user = await userDAO.findUser(idUser);
		const {userName: name, roleId} = user;
		if (roleId == 2){
			user.roleId = 1;
			return await userDAO.changeToAdminRole(user);
		}
		return {msg: `Warning: ${name} is Admin already`};
	}

}

module.exports = UserController;

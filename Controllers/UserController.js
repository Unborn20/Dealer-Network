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
		userModel.userPassword = await bcrypt.hash(user.password, 10);
		const userExists = await userDAO.saveUser(userModel);
		if (userExists){
			return {msg: 'Warning: This user does exists already'};			
		}	
		return {msg: 'Success: User registered successfully'};
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

	async changeToAdminRole(idUser){
		const userDAO = new UserDAO();
		const user = await userDAO.findUser(idUser);
		const {userName: name, roleId} = user;
		if (roleId == 2){
			user.roleId = 1;
			const newAdminName = await userDAO.changeRole(user);
			return newAdminName;
		}
		return {msg: `Warning: ${name} is Admin already`};
	}

}

module.exports = UserController;

'use strict';
/**
 * DEPENDENCIES
 */
const express = require('express');
const UserController = require('../Controllers/UserController');
const {verifyToken, verifyAdminRole} = require('../Middlewares/auth');
const userRouter = express.Router();

/**
 * ROUTE: user/saveUser
 * RESPONSE: User registered successfully
 */
userRouter.post('/saveUser', async (req, res) => {
	try{
		const userController = new UserController();
		const user = req.body;
		const msg = await userController.saveNewUser(user);
		res.status(200).send(msg);
	}catch(err){
		res.status(500).send({msg: 'Error 500: Server error'});
	}
});

/**
 * ROUTE: user/login
 * RESPONSE: Return authentication token
 */
userRouter.post('/login', async (req, res) => {
	try{
		const userController = new UserController();
		const credentials = req.body;
		const msg = await userController.login(credentials);
		res.status(200).send(msg);
	}catch(err){
		res.status(500).send({msg: 'Error 500: Server error'});
	}
});

/**
 * ROUTE: user/changeRole/:idUser
 * RESPONSE: User now is Admin
 */
userRouter.put('/changeRole/:idUser', verifyToken, verifyAdminRole, async (req, res) => {
	try{
		const userController = new UserController();
		const idUser = Number(req.params['idUser']);
		const msg = await userController.changeToAdminRole(idUser)(idUser);
		res.status(200).send(msg);
	}catch(err){
		res.status(500).send({msg: 'Error 500: Server error'});
	}
});

module.exports = userRouter;

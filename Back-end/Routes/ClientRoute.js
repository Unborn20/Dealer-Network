'use strict';
/**
 * DEPENDENCIES
 */
const express = require('express');
const ClientController = require('../Controllers/ClientController');
const {verifyToken, verifyEmployeeRole} = require('../Middlewares/auth');
const clientRouter = express.Router();

/**
 * ROUTE: 'client/'
 * RESPONSE: Show all registered clients
 */
clientRouter.get('/', verifyToken, async (req, res) => {
	try{
		const clients = await ClientController.showClients();
		res.status(200).send(clients);
	}catch(err){
		res.status(500).json({msg: 'Error 500: Server error'});
	}
});

/**
 * ROUTE: 'client/newClient'
 * RESPONSE: Success: A new client Registered
 */
clientRouter.post('/newClient', verifyToken, verifyEmployeeRole, async (req, res) => {
	try{
		const client = req.body;
		const userId = req.user.idusers;
		const clientController = new ClientController();
		const msg = await clientController.registerInfoClient({...client, userId});
		res.status(200).send(msg);
	}catch(err){
		res.status(500).json({msg: 'Error 500: Server error'});
	}
});

/**
 * ROUTE: 'client/newSale'
 * RESPONSE: Success: Sale registered successfully
 */
clientRouter.post('/newSale', verifyToken, verifyEmployeeRole, async (req, res) => {
	try{
		const sale = req.body;
		const clientController = new ClientController();
		const msg = await clientController.saleVehicle(sale);
		res.status(200).send(msg);
	}catch(err){
		res.status(500).json({msg: 'Error 500: Server error'});
	}
});

module.exports = clientRouter;

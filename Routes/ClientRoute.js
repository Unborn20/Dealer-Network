/**
 * DEPENDENCIES
 */
const express = require('express');
const ClientController = require('../Controllers/ClientController');
const clientRouter = express.Router();

/**
 * Route: '/'
 *
 * Reponse: Show all registred clients
 */
clientRouter.get('/', async (req, res) => {
	let clients = await ClientController.showClients();
	res.status(200).send(clients);
});

/**
 * Route: '/newClient'
 *
 * Response: Success: A new client Registered
 */
clientRouter.post('/newClient', async (req, res) => {	
	let client = req.body;
	let clientController = new ClientController();
	let msg = await clientController.registerInfoClient(client);
	res.status(200).send(msg);
});

/**
 * Route: '/newSale'
 *
 * Response: Success: Sale registered successfully
 */
clientRouter.post('/newSale', async (req, res) => {
	let sale = req.body;
	let clientController = new ClientController();
	let msg = await clientController.saleVehicle(sale);
	res.status(200).send(msg);
});

module.exports = clientRouter;

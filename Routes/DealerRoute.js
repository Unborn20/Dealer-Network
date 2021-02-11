/**
 * DEPENDENCIES
 */
const express = require('express');
const DealerController = require('../Controllers/DealerController');
const dealerRouter = express.Router();

/**
 *	Route: '/'
 *
 *	Response: List all Dealers Centers
 */
dealerRouter.get('/', async (req, res) => {
	let dealers = await DealerController.showDealers();
	res.status(200).send(dealers);
});

/**
 * Route: '/newDealer'
 *
 * Response: One record inserted
 */
dealerRouter.post('/newDealer', async (req, res) => {
	let dealer = req.body;	
	let dealerController = new DealerController();
	let msg = await dealerController.registerNewDealer(dealer);
	res.status(200).send(msg);
});

module.exports = dealerRouter;

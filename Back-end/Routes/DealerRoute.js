'use strict';
/**
 * DEPENDENCIES
 */
const express = require('express');
const DealerController = require('../Controllers/DealerController');
const {verifyToken, verifyAdminRole} = require('../Middlewares/auth');
const dealerRouter = express.Router();

/**
 *	ROUTE: 'dealer/'
 *	RESPONSE: List all Dealers Centers
 */
dealerRouter.get('/', verifyToken, verifyAdminRole, async (req, res) => {
	try{
		const dealers = await DealerController.showDealers();
		res.status(200).send(dealers);
	}catch(err){
		res.status(500).json({msg: 'Error 500: Server error'});
	}	
});

/**
 * ROUTE: 'dealer/newDealer'
 * RESPONSE: One record inserted
 */
dealerRouter.post('/newDealer', verifyToken, verifyAdminRole, async (req, res) => {
	try{
		const dealer = req.body;	
		const userId = req.user.idusers;
		const dealerController = new DealerController();
		const msg = await dealerController.registerNewDealer({...dealer, userId});
		res.status(200).send(msg);
	}catch(err){
		res.status(500).json({msg: 'Error 500: Server error'});
	}
});

module.exports = dealerRouter;

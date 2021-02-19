'use strict';
/**
 * Dependencies
 */
const express = require('express');
const VehicleController = require('../Controllers/VehicleController');
const {verifyToken, verifyEmployeeRole} = require('../Middlewares/auth');
const vehicleRouter = express.Router();

/**
 * ROUTE: vehicle/newVehicle
 * RESPONSE: New vehicle inserted Success
 */
vehicleRouter.post('/newVehicle', verifyToken, verifyEmployeeRole, async (req, res) => {
	try{
		const vehicle = req.body;
		const vehicleController = new VehicleController();
		const msg = await vehicleController.registerNewVehicle(vehicle);
	res.status(200).send(msg);
	}catch(err){
		res.status(500).json({msg: 'Server error'});
	}
});

/**
 * ROUTE: vehicle/recentVehicles
 * RESPONSE: Most recent vehicles
 */
vehicleRouter.get('/recentVehicles', verifyToken, verifyEmployeeRole, async (req, res) => {
	try{
		const mostRecent = await VehicleController.showMostRecentVehicle();
		res.status(200).send(mostRecent);
	}catch(err){
		res.status(500).json({msg: 'Server error'});
	}
});

/**
 * ROUTE: vehicle/showByAbovePrice/:limit
 * RESONSE: Filter vehicles by above price
 */
vehicleRouter.get('/showByAbovePrice/:limit', verifyToken, verifyEmployeeRole, async (req, res) => {
	try{
		const limit = Number(req.params['limit']).toFixed(2);
		const vehicleController = new VehicleController();
		const vehiclesByAbovePrice = await vehicleController.showVehiclesByAbovePrice(limit);
		res.status(200).send(vehiclesByAbovePrice);
	}catch(err){
		res.status(500).json({msg: 'Server error'});
	}
});

/**
 * ROUTE: vehicle/cheapestVehicle
 * RESPONSE: Show the vehicle cheaper
 */
vehicleRouter.get('/cheapestVehicle', verifyToken, verifyEmployeeRole, async (req, res) => {
	try{
		const cheapestVehicle = await VehicleController.showCheaperVehicle();
		res.status(200).send(cheapestVehicle);
	}catch(err){
		res.status(500).json({msg: 'Server error'});
	}
});

/**
 * ROUTE: vehicle/mostSaleVehicle/:dealer
 * RESPONSE: Show the most sale vehicle by dealer
 */
vehicleRouter.get('/mostSaleVehicle/:dealer', verifyToken, verifyEmployeeRole, async (req, res) => {
	try{
		const dealer = req.params['dealer'];
		const vehicleController = new VehicleController();
		const mostSaleVehicle = await vehicleController.showMostSaleVehicle(dealer);
		res.status(200).send(mostSaleVehicle);
	}catch(err){
		res.status(500).json({msg: 'Server error'});
	}
});

module.exports = vehicleRouter;

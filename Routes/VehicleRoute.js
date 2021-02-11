/**
 * Dependencies
 */
const express = require('express');
const VehicleController = require('../Controllers/VehicleController');
const vehicleRouter = express.Router();

/**
 * Route: /newVehicle
 *
 * Response: New vehicle inserted Success
 */
vehicleRouter.post('/newVehicle', async (req, res) => {
	let vehicle = req.body;
	let vehicleController = new VehicleController();
	let msg = await vehicleController.registerNewVehicle(vehicle);
	res.status(200).send(msg);
});

/**
 * Route: /recentVehicles
 *
 * Response: Most recent vehicles
 */
vehicleRouter.get('/recentVehicles', async (req, res) => {
	let mostRecent = await VehicleController.showMostRecentVehicle();
	res.status(200).send(mostRecent);
});

/**
 * Route: /showByAbovePrice/:limit
 *
 * Response: Filter vehicles by above price
 */
vehicleRouter.get('/showByAbovePrice/:limit', async (req, res) => {
	let limit = Number(req.params['limit']).toFixed(2);
	let vehicleController = new VehicleController();
	let vehiclesByAbovePrice = await vehicleController.showVehiclesByAbovePrice(limit);
	res.status(200).send(vehiclesByAbovePrice);
});

/**
 * Route: /cheapestVehicle
 *
 * Response: Show the vehicle cheaper
 */
vehicleRouter.get('/cheapestVehicle', async (req, res) => {
	let cheapestVehicle = await VehicleController.showCheaperVehicle();
	res.status(200).send(cheapestVehicle);
});

/**
 * Route: /mostSaleVehicle/:dealer
 *
 * Response: Show the most sale vehicle by dealer
 */
vehicleRouter.get('/mostSaleVehicle/:dealer', async (req, res) => {
	let dealer = req.params['dealer'];
	let vehicleController = new VehicleController();
	let mostSaleVehicle = await vehicleController.showMostSaleVehicle(dealer);
	res.status(200).send(mostSaleVehicle);
});

module.exports = vehicleRouter;

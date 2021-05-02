'use strict';
const Vehicle = require('../Models/Vehicle');
const VehicleDAO = require('../DAO/VehicleDAO');

class VehicleController{

	constructor(){}

	/** Return a message */
	async registerNewVehicle(vehicle){
		const vehicleModel = new Vehicle();
		vehicleModel.brand = vehicle.brand;
		vehicleModel.model = Number(vehicle.model);
		vehicleModel.price = Number(vehicle.price).toFixed(2);
		vehicleModel.dealerCode = Number(vehicle.dealerCode).toFixed(0);
		vehicleModel.userVehicleId = Number(vehicle.userId);
		const vehicleDAO = new VehicleDAO();
		await vehicleDAO.registerNewVehicle(vehicleModel);
		return {msg: 'Success: Vehicle saved successfully'};
	}
  
	static async showMostRecentVehicle(){
		const mostRecentVehicles = await VehicleDAO.showMostRecentVehicles();
		return mostRecentVehicles;
	} 

	async showVehiclesByAbovePrice(limit){
		const vehicleDAO = new VehicleDAO();
		return await vehicleDAO.showVehiclesByAbovePrice(limit);
	}

	static async showCheaperVehicle(){
		const cheapestVehicle = await VehicleDAO.showCheaperVehicle();
		return cheapestVehicle;	
	}

	async showMostSaleVehicle(dealer){
		const vehicleDAO = new VehicleDAO();
		return await vehicleDAO.showMostSaleVehicleByDealer(dealer);
	}

}

module.exports = VehicleController;

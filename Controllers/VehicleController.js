'use strict';
const Vehicle = require('../Models/Vehicle');
const VehicleDAO = require('../DAO/VehicleDAO');

class VehicleController{

	constructor(){}

	async registerNewVehicle(vehicle){
		let vehicleModel = new Vehicle();
		vehicleModel.brand = vehicle.brand;
		vehicleModel.model = Number(vehicle.model);
		vehicleModel.price = Number(vehicle.price).toFixed(2);
		vehicleModel.dealerCode = Number(vehicle.dealerCode).toFixed(0);
		let vehicleDAO = new VehicleDAO();
		return await vehicleDAO.registerNewVehicle(vehicleModel);
	}
  
	static async showMostRecentVehicle(){
		let mostRecentVehicles = await VehicleDAO.showMostRecentVehicles();
		return mostRecentVehicles;
	} 

	async showVehiclesByAbovePrice(limit){
		let vehicleDAO = new VehicleDAO();
		return await vehicleDAO.showVehiclesByAbovePrice(limit);
	}

	static async showCheaperVehicle(){
		let cheapestVehicle = await VehicleDAO.showCheaperVehicle();
		return cheapestVehicle;	
	}

	async showMostSaleVehicle(dealer){
		let vehicleDAO = new VehicleDAO();
		return await vehicleDAO.showMostSaleVehicleByDealer(dealer);
	}

}

module.exports = VehicleController;

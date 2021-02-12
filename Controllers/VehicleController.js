'use strict';
const VehicleDTO = require('../DTO/VehicleDTO');
const VehicleDAO = require('../DAO/VehicleDAO');

class VehicleController{

	constructor(){}

	async registerNewVehicle(vehicle){
		let VehicleDTO = new VehicleDTO();
		vehicleDTO.brand = vehicle.brand;
		VehicleDTO.model = Number(vehicle.model);
		vehicleDTO.price = Number(vehicle.price).toFixed(2);
		ivehicleDTO.dealerCode = Number(vehicle.dealerCode).toFixed(0);
		let vehicleDAO = new VehicleDAO(vehicleDTO);
		return await vehicleDAO.registerNewVehicle();
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

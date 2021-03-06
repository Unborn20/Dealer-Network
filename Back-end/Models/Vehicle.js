'use strict';
class Vehicle{	

  brand = '';
	model = 0;
	price = 0.0;
	dealerCode = 0; 
	userVehicleId = 0;

	constructor(){}

	get brand(){
		return this.brand;		
	}

	set brand(brand){
		this.brand = brand;
	}

	get model(){
		return this.model;
	}

	set model(model){
		this.model = model;
	}

	get price(){
		return this.price;
	}

	set price(price){
		this.price = price;
	}

	get dealerCode(){
		return this.dealerCode;
	}

	set dealerCode(dealerCode){
		this.dealerCode = dealerCode;
	}

	get userVehicleId(){
		return this.userVehicleId;
	}

	set userVehicleId(userVehicleId){
		this.userVehicleId = userVehicleId;
	}

}

module.exports = Vehicle;

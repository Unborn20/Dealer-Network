'use strict';
/**
 * DEPENDENCIES
 */
const Client = require('../Models/Client');
const ClientDAO = require('../DAO/ClientDAO');
const SaleDAO = require('../DAO/SaleDAO');

class ClientController{
	
	constructor(){}

	static async showClients(){
		let clients = await ClientDAO.showAllClients();
		return clients;
	}

	async registerInfoClient(client){
		let clientModel = new Client();
		clientModel.name = client.name;
		clientModel.phone = client.phone;
		clientModel.address = client.address;
		let clientDAO = new ClientDAO();
		return await clientDAO.registerNewClient(clientModel);
	}

	async saleVehicle(sale){
		let saleDAO = new SaleDAO();
		return await saleDAO.saleVehicle(sale);
	}

}

module.exports = ClientController;

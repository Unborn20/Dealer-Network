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
		const clients = await ClientDAO.showAllClients();
		return clients;
	}

	async registerInfoClient(client){
		const clientModel = new Client();
		clientModel.name = client.name;
		clientModel.phone = client.phone;
		clientModel.address = client.address;
		clientModel.userClientId = Number(client.userId);
		const clientDAO = new ClientDAO();
		const clienteExists = await clientDAO.registerNewClient(clientModel);
		if (clienteExists){
			return {msg: 'Success: Client registered successfully'};
		}
		return {msg: 'Warning: This client does exists already'};
	}

	async saleVehicle(sale){
		const saleDAO = new SaleDAO();
		await saleDAO.saleVehicle(sale);
		return {msg: 'Success: Sale registered successfully'};
	}

}

module.exports = ClientController;

/**
 * DEPENDENCIES
 */
const ClientDTO = require('../DTO/ClientDTO');
const ClientDAO = require('../DAO/ClientDAO');
const SaleDAO = require('../DAO/SaleDAO');

class ClientController{
	
	constructor(){}

	static async showClients(){
		let clients = await ClientDAO.showAllClients();
		return clients;
	}

	async registerInfoClient(client){
		let newClient = new ClientDTO();
		newClient.name = client.name;
		newClient.phone = client.phone;
		newClient.address = client.address;
		let clientDAO = new ClientDAO(newClient);
		return await clientDAO.registerNewClient();
	}

	async saleVehicle(newSale){
		let saleDAO = new SaleDAO(newSale);
		return await saleDAO.saleVehicle();
	}

}

module.exports = ClientController;

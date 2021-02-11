const DealerDTO = require('../DTO/DealerDTO');
const DealerDAO = require('../DAO/DealerDAO');

class DealerController{

	constructor(){}

	static async showDealers(){	
		let dealers = await DealerDAO.showDealers();
		return dealers;
	} 

	async registerNewDealer(dealer){
		let newDealer = new DealerDTO();
		newDealer.dealerName = dealer.name;
		newDealer.phone = dealer.phone;
		newDealer.address = dealer.address;
		let dealerDAO = new DealerDAO(newDealer);
		return await dealerDAO.registerNewDealer();		
	}

}

module.exports = DealerController;

'use strict';
const Dealer = require('../Models/Dealer');
const DealerDAO = require('../DAO/DealerDAO');

class DealerController{

	constructor(){}

	static async showDealers(){	
		let dealers = await DealerDAO.showDealers();
		return dealers;
	} 

	async registerNewDealer(dealer){
		let dealerModel = new Dealer();
		dealerModel.dealerName = dealer.name;
		dealerModel.phone = dealer.phone;
		dealerModel.address = dealer.address;
		let dealerDAO = new DealerDAO();		
		return await dealerDAO.registerNewDealer(dealerModel);		
	}

}

module.exports = DealerController;

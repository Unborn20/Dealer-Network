'use strict';
const Dealer = require('../Models/Dealer');
const DealerDAO = require('../DAO/DealerDAO');

class DealerController{

	constructor(){}

	static async showDealers(){	
		const dealers = await DealerDAO.showDealers();
		return dealers;
	} 

	async registerNewDealer(dealer){
		const dealerModel = new Dealer();
		dealerModel.dealerName = dealer.name;
		dealerModel.phone = dealer.phone;
		dealerModel.address = dealer.address;
		dealerModel.userDealerId = Number(dealer.userId);
		const dealerDAO = new DealerDAO();		
		const dealerExists = await dealerDAO.registerNewDealer(dealerModel);		
		if (!dealerExists){
			return {msg: 'Success: Dealer registered succesfully'};
		}
		return {msg: 'Warning: This dealer does exists already'};
	}

}

module.exports = DealerController;

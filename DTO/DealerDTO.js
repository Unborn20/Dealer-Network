'use strict';
class DealerDTO{

	dealerName = '';
	phone = '';
	address = '';

	constructor(){}

	get dealerName(){
		return this.dealerName;
	}

	set dealerName(dealerName){
		this.dealerName = dealerName;
	}

	get phone(){
		return this.phone;
	}

	set phone(phone){
		this.phone = phone;
	}

	get address(){
		return this.address;
	}

	set address(address){
		this.address = address;
	}

}

module.exports = DealerDTO;

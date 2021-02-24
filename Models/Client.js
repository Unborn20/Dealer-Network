'use strict';
class Client{

	name = '';
	phone = '';
	address = '';
	userClientId = 0;

	constructor(){}

	get name(){
		return this.name;
	}

	set name(name){
		this.name = name;
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
	
	get userClientId(){
		return this.userClientId;
	}

	set userClientId(userClientId){
		this.userClientId = userClientId;
	}

}

module.exports = Client;

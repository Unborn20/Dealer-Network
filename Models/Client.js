'use strict';
class Client{

	name = '';
	phone = '';
	address = '';

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

}

module.exports = Client;

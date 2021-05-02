class User{
	
	userName = '';
	email = '';
	userPassword = '';

	constructor(){}

	get userName(){
		return this.userName;
	}

	set userName(userName){
		this.userName = userName;
	}

	get email(){
		return this.email;
	}

	set email(email){
		this.email = email;
	}

	get userPassword(){
		return this.userPassword;
	}

	set userPassword(userPassword){
		this.userPassword = userPassword;
	}

}

module.exports = User;

module.exports = {
    "up": "CREATE TABLE `roles` ("+
					"	idroles INT(11) AUTO_INCREMENT NOT NULL,"+
					" role VARCHAR(12) NOT NULL,"+
					"	PRIMARY KEY (idroles)"+
					")",
    "down": "DROP TABLE roles"
}

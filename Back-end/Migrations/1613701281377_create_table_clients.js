module.exports = {
    "up": "CREATE TABLE `clients` ("+
  				" `idclients` int(11) NOT NULL AUTO_INCREMENT,"+
		 	 		" `name` varchar(45) NOT NULL,"+
  				" `phone` varchar(11) NOT NULL,"+
	  			" `address` varchar(45) NOT NULL,"+
					" `registeredDate` TIMESTAMP,"+
					" `userClientId` INT(11) NOT NULL,"+
	 	 			" PRIMARY KEY (`idclients`),"+
					" CONSTRAINT `fk_userClientId` FOREIGN KEY (`userClientId`) REFERENCES users(`idusers`)"+
					") ENGINE=InnoDB CHARSET=utf8",
    "down": "DROP TABLE clients"
}

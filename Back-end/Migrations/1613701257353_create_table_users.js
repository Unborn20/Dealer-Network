module.exports = {
    "up": "CREATE TABLE `users` ("+
  				" `idusers` int(11) NOT NULL AUTO_INCREMENT,"+
  				"	`userName` varchar(45) NOT NULL,"+
				  "	`roleId` int(11) NOT NULL DEFAULT '2',"+
				  " `email` varchar(50) NOT NULL,"+
				  " `userPassword` varchar(255) NOT NULL,"+
				  " `registerDate` TIMESTAMP,"+
				  " PRIMARY KEY (`idusers`),"+ 
				  " CONSTRAINT `fk_roleId` FOREIGN KEY (`roleId`) REFERENCES `roles` (`idroles`)"+
					") ENGINE=InnoDB CHARSET=utf8",
    "down": "DROP TABLE users"
}

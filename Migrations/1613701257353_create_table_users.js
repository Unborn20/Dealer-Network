module.exports = {
    "up": "CREATE TABLE `users` ("+
  				" `idusers` int(11) NOT NULL AUTO_INCREMENT,"+
  				"	`userName` varchar(45) NOT NULL,"+
				  "	`roleId` int(11) NOT NULL DEFAULT '2',"+
				  " `email` varchar(50) NOT NULL,"+
				  " `userPassword` varchar(45) NOT NULL,"+
				  " `registerDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"+
				  " PRIMARY KEY (`idusers`),"+
				  " KEY `fk_roleId` (`roleId`),"+
				  " CONSTRAINT `fk_roleId` FOREIGN KEY (`roleId`) REFERENCES `roles` (`idroles`)"+
					") ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8",
    "down": "DROP TABLE users"
}

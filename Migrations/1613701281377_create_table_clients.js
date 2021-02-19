module.exports = {
    "up": "CREATE TABLE `clients` ("+
  				" `idclients` int(11) NOT NULL AUTO_INCREMENT,"+
		 	 		" `name` varchar(45) NOT NULL,"+
  				" `phone` varchar(11) NOT NULL,"+
	  			" `address` varchar(45) NOT NULL,"+
	 	 			" PRIMARY KEY (`idclients`)"+
					") ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8",
    "down": "DROP TABLE clients"
}

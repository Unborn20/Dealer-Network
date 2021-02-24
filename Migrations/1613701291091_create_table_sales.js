module.exports = {
    "up": "CREATE TABLE `sales` ("+
		  		" `idsales` int(11) NOT NULL AUTO_INCREMENT,"+
	  			" `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"+
		  		" `vehicleId` int(11) NOT NULL,"+
		  		" `clientId` int(11) NOT NULL,"+
  				" PRIMARY KEY (`idsales`),"+	
  				" CONSTRAINT `clienteId` FOREIGN KEY (`clientId`)"+
					" REFERENCES `clients` (`idclients`) ON DELETE NO ACTION ON UPDATE NO ACTION,"+
	  			"	CONSTRAINT `vehicleId` FOREIGN KEY (`vehicleId`)"+
					" REFERENCES `vehicles` (`idvehicles`) ON DELETE NO ACTION ON UPDATE NO ACTION"+
					") ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;",
    "down": "DROP TABLE sales"
}

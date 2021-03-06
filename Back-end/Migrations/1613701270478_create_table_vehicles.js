module.exports = {
    "up": "CREATE TABLE `vehicles` ("+
  				" `idvehicles` int(11) NOT NULL AUTO_INCREMENT,"+
 	 				" `brand` varchar(25) NOT NULL,"+
			  	" `model` int(11) NOT NULL,"+
		  		" `price` double NOT NULL,"+
		  		" `dealerCode` int(11) NOT NULL,"+
	 	 			" `userVehicleId` int(11) NOT NULL,"+
				  " PRIMARY KEY (`idvehicles`),"+ 
  				" CONSTRAINT `fk_dealerCode` FOREIGN KEY (`dealerCode`)"+
					"	REFERENCES `dealers` (`nit`) ON DELETE NO ACTION ON UPDATE NO ACTION"+
					") ENGINE=InnoDB CHARSET=utf8",
    "down": "DROP TABLE vehicles"
}

module.exports = {
    "up": "CREATE TABLE `sales` ("+
				  "`idsales` INT(11) NOT NULL,"+
				  "`date` TIMESTAMP NOT NULL,"+
				  "`vehicleId` INT(11) NOT NULL,"+
					"`clientId` INT(11) NOT NULL,"+
				  "PRIMARY KEY (`idsales`),"+
				  "INDEX `vehicleId_idx` (`vehicleId` ASC),"+
				  "INDEX `clienteId_idx` (`clientId` ASC),"+
					"CONSTRAINT `vehicleId`"+
			    " FOREIGN KEY (`vehicleId`)"+
			    " REFERENCES `dealer_network_DB`.`vehicles` (`idvehicles`)"+
			    " ON DELETE NO ACTION"+
				  " ON UPDATE NO ACTION,"+
				  "CONSTRAINT `clienteId`"+
		    	" FOREIGN KEY (`clientId`)"+
		 	   	" REFERENCES `dealer_network_DB`.`clients` (`idclients`)"+
			    " ON DELETE NO ACTION"+
				  " ON UPDATE NO ACTION)"+
					"ENGINE = InnoDB;",
    "down": "DROP TABLE `sales`"
}

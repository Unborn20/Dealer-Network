module.exports = {
    "up": "CREATE TABLE `vehicles` ("+
  				"`idvehicles` INT(11) NOT NULL,"+
  				"`brand` VARCHAR(25) NOT NULL,"+
  				"`model` INT(11) NOT NULL,"+
  				"`price` DOUBLE NOT NULL,"+
  				"`dealerCode` INT(11) NOT NULL,"+
  				"PRIMARY KEY (`idvehicles`),"+
  				"INDEX `fk_vehicles_1_idx` (`dealerCode` ASC),"+
  				"CONSTRAINT `dealerCode`"+
    			" FOREIGN KEY (`dealerCode`)"+
    			" REFERENCES `dealer_network_DB`.`dealers` (`nit`)"+
    			" ON DELETE NO ACTION"+
    			" ON UPDATE NO ACTION)"+
					"ENGINE = InnoDB;",
    "down": "DROP TABLE `vehicles`"
}

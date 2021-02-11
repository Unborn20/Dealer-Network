module.exports = {
    "up": "CREATE TABLE `clients` ("+
			  	"`idclients` INT NOT NULL,"+
				  "`name` VARCHAR(45) NOT NULL,"+
  				"`phone` VARCHAR(11) NOT NULL,"+
		  		"`address` VARCHAR(45) NULL,"+
			  	"PRIMARY KEY (`idclients`))"+
					"ENGINE = InnoDB;",
    "down": "DROP TABLE `clients`"
}

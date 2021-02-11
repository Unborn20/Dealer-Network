module.exports = {
    "up": "CREATE TABLE `dealers` ("+
  				"`nit` INT(11) NOT NULL AUTO_INCREMENT,"+
  				"`name` VARCHAR(45) NOT NULL,"+
  				"`phone` VARCHAR(11) NOT NULL,"+
  				"`address` VARCHAR(45) NOT NULL,"+
  				"PRIMARY KEY (`nit`))"+
					"ENGINE = InnoDB;",
    "down": "DROP TABLE `dealers`"
}

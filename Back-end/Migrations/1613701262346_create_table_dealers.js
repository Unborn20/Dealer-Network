module.exports = {
    "up": "CREATE TABLE `dealers` (" +
			  	" `nit` int(11) NOT NULL AUTO_INCREMENT,"+
			  	" `dealerName` varchar(45) NOT NULL,"+
			  	" `phone` varchar(11) NOT NULL,"+
			  	" `address` varchar(45) NOT NULL,"+
			  	" `userDealerId` int(11) NOT NULL,"+
					" PRIMARY KEY (`nit`),"+
					" CONSTRAINT `fk_userDealerId` FOREIGN KEY (userDealerId) REFERENCES users(idusers)"+
  				") ENGINE=InnoDB CHARSET=utf8",
    "down": "DROP TABLE dealers"
}

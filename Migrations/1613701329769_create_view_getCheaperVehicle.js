module.exports = {
    "up": "CREATE VIEW `getCheaperVehicle` AS select"+ 
			    " `vehicles`.`brand` AS `brand`,"+
			    " `vehicles`.`price` AS `price`,"+
			    " `dealerName` AS `dealer`,"+
			    " `dealers`.`address` AS `address`"+
				  "from"+
			    " (`vehicles`"+
			    " join `dealers`"+ 
					" ON ((`vehicles`.`dealerCode` = `dealers`.`nit`)))"+
			    "order by `vehicles`.`price`"+
			    "limit 1",
    "down": "DROP VIEW getCheaperVehicle"
}

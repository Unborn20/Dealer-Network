module.exports = {
    "up": "CREATE PROCEDURE `getMostSoldByDealer` (IN dealer VARCHAR(45))"+
					" SELECT COUNT(sales.vehicleId) Sales, vehicles.brand, dealers.dealerName"+
					" FROM vehicles"+
					" INNER JOIN sales ON sales.vehicleId = vehicles.idvehicles"+	
					" INNER JOIN dealers ON dealers.nit = vehicles.dealerCode"+
					"	WHERE dealers.dealerName = dealer"+
					" GROUP BY sales.vehicleId"+
					"	ORDER BY Sales DESC"+
					"	LIMIT 1;",
    "down": "DROP PROCEDURE `getMostSoldByDealer`"
}

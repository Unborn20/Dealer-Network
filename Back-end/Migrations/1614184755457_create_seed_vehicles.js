module.exports = {
    "up": "INSERT INTO vehicles (brand, model, price, dealerCode, userVehicleId) VALUES"+
					"('Mazda', 2006, 23000, 1, 2),"+
					"('Fiat', 2012, 35000.34, 2, 2),"+
					"('Chevrolet', 2017, 42000.67, 1, 2)",
    "down": "DELETE FROM vehicles"
}

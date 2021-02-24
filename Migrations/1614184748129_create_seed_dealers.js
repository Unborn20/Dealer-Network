module.exports = {
    "up": "INSERT INTO dealers (dealerName, phone, address, userDealerId) VALUES"+
					"('Dealer A', '123456789', 'Fake street 123', 1),"+
					"('Dealer B', '987654321', 'Fake street 456', 1)",
    "down": "DELETE FROM dealers"
}

module.exports = {
    "up": "INSERT INTO clients (name, phone, address, userClientId) VALUES"+
					"('Pepe', '123456789', 'Fake street 789', 2),"+
					"('Lola', '987654321', 'Fake street 987', 2)",
    "down": "DELETE FROM clients"
}

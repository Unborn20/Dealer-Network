const bcrypt = require('bcryptjs');
const password = bcrypt.hashSync('user123', 10);

module.exports = {
    "up": "INSERT INTO users (userName, email, userPassword, roleId) VALUES"+
					"('Admin Fake', 'admin@gmail.com', '" + password + "', 1),"+
					"('Employee Fake', 'employee@gmail.com', '" + password +"', 2)",
    "down": "DELETE FROM users"
}

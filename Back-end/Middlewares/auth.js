/**
 * DEPENDENCIES
 */
const jwt = require('jsonwebtoken');

/**
 * VERIFY IF TOKEN IS VALID
 */
const verifyToken = (req, res, next) => {
	const token = req.get('Authorization');
	const seed = process.env.SEED;
	jwt.verify(token, seed, (err, decoded) => {
		if (err) { 
			return res.status(401).json({msg: 'Invalid token'});
		}
		req.user = decoded.user;
		next();
	});
}

/**
 * VERIFY ADMIN ROLE 
 */
const verifyAdminRole = (req, res, next) => {
	const user = req.user;
	if (user.roleId != 1){
		return res.status(401).json({msg: 'No valid permissions' });		
	}
	next();
}

/**
 * VERIFY EMPLOYEE ROLE 
 */
const verifyEmployeeRole = (req, res, next) => {
	const user = req.user;
	if (user.roleId != 2){
		return res.status(401).json({msg: 'No valid permissions' });		
	}
	next();
}

module.exports = {
	verifyToken, 
	verifyAdminRole, 
	verifyEmployeeRole
};

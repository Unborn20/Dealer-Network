module.exports = {
    "up": "INSERT INTO roles (role) VALUES ('Admin'), ('Employee')",
    "down": "DELETE FROM roles"
}

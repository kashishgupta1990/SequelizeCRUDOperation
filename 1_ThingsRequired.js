//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('your-database-name', 'db-username', 'db-password', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});
//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('your-database', 'db-usernaem', 'db-password', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

//Checking connection status
sequelize.authenticate().complete(function (err) {
    if (err) {
        console.log('There is connection ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
});

//Create Item Table Structure
var Item = sequelize.define('Item', {
    id: Sequelize.STRING,
    name:Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.INTEGER
});

//Reading All Data
//Getting all data
Item.find({}).complete(function (err,data) {
    console.log(data);
});
//With where condition
Item.find({where:{name:'Laptop'}}).complete(function (err, data) {
    console.log(data);
});
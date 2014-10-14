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

//Updating Laptop to Computer
Item.find({where:{name:'Laptop'}}).complete(function (err, data) {
    if(err){
        console.log(err);
    }
    if(data){
        data.updateAttributes({
            name:'Computer'
        }).success(function (data1) {
            console.log(data1);
        })
    }
});
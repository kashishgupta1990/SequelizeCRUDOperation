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

//Applying Item Table to database
/*sequelize.sync({force:true}).complete(function (err) {
    if(err){
        console.log('An error occur while creating table');
    }else{
        console.log('Item table created successfully');
    }
});*/

//There is two way of inserting data into database
//One way: Forming object from modal
var item1 = Item.build({
    id: 1,
    name:'Laptop',
    description: 'Acer 2340TL',
    qty: 23
});
//Inserting Data into database
item1.save().complete(function (err) {
    if (err) {
        console.log('Error in Inserting Record');
    } else {
        console.log('Data successfully inserted');
    }
});

//Other way: Immediate insertion of data into database
sequelize.sync().success(function () {
    Item.create({
        id: 2,
        name:'Cell Phone',
        description: 'Sony',
        qty: 20
    }).success(function (data) {
        console.log(data.values)
    })
});
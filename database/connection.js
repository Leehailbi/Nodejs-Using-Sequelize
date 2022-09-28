const Sequelize = require("sequelize")

const sequelize = new Sequelize("schooldb", "root", "Accubits@02",{
    host: "127.0.0.1",
    dialect: "mysql",
    operatorAliases: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log("connection made successfully");
  })
  .catch((err) => console.log(err, "this has a error"));


sequelize 
.sync({ force: true })
.then(function(err) {
    console.log('It worked!');
  }, function (err) { 
         console.log('An error occurred while creating the table:', err);
  });


module.exports = sequelize
global.sequelize = sequelize
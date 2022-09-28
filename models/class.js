const Sequelize =  require("sequelize")
const sequelize = require("../database/connection")

module.exports = sequelize.define("Classes",{
    className :{
        type : Sequelize.STRING,
        allowNull : false,
        required :true
    },
    section :{
        type : Sequelize.STRING,
        allowNull : false,
        required :true
    },
    employeeId :{
        type : Sequelize.STRING,
        unique : true,
        allowNull :false,
        required :true
    },
    numberOfStudent : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    teacherId:{
        type : Sequelize.INTEGER,
        allowNull :false
    },
    // teacher :{
    // type : Sequelize.INTEGER,
    // allowNull :false
    // }


})


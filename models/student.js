const Sequelize = require("sequelize")

const sequelize  = require("../database/connection")
module.exports = sequelize.define("Students",{
      studentName:{
            type : Sequelize.STRING,
            allowNull : false
      },
      rollNo:{
            type : Sequelize.STRING,
            unique : true
      },
      studentClass:{
            type : Sequelize.STRING,
            allowNull :false
      },
      section:{
            type : Sequelize.STRING,
            allowNull : false
      },
      attendance :{
            type :Sequelize.INTEGER,
            allowNull : false
      },
      contact :{
            type : Sequelize.STRING
      }

})
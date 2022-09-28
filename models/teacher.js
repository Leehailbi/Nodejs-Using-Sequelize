const Sequelize = require("sequelize")

const sequelize  = require("../database/connection")
module.exports = sequelize.define("Teachers",{
    teacherName:{
        type : Sequelize.STRING,
        allowNull :false
    },
    staffId : {
        type : Sequelize.STRING,
        allowNull :false
        
    },
    attendance : {
        type : Sequelize.INTEGER,
        allowNull :false
    },
    subjectTeacher:{
        type : Sequelize.STRING,
        trim :true
    },
    contact:{
        type :Sequelize.STRING,
        allowNull :false
       
    },
    classId:{
        type : Sequelize.INTEGER,
        allowNull :false
    }

})


const Sequelize = require("sequelize")

const sequelize  = require("../database/connection")
module.exports = sequelize.define("Teachers",{
    teacherName:{
        type : Sequelize.STRING,
        allowNull :false,
        required :true
    },
    staffId : {
        type : Sequelize.STRING,
        allowNull :false,
        required : true
        
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
        allowNull :false,
        required :true       
    },
    classId:{
        type : Sequelize.INTEGER,
        allowNull :false
    }

})


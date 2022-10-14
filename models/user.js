const Sequelize =  require("sequelize")
const sequelize = require("../database/connection")
const validator = require("validator")
module.exports = sequelize.define("User",{
    userName:{
        type: Sequelize.STRING,

    },
    email:{
        type: Sequelize.STRING,
        //required: [true,"Email is required"],
        unique: true,
        lowercase: true,
        //validate: [validator.isEmail, "please provide a valid email"]


    },
    
    password:{
        type: Sequelize.STRING,
        //required: [true,"Password is required"],
        minlength: 8
    }
})

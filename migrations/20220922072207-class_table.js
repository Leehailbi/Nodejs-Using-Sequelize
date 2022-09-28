'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Classes",{
      className :{
        type : Sequelize.STRING,
        allowNull : false,
        required :true
    },
    section :{
        type : Sequelize.STRING,
        allowNull : false,
        required : true
    },
    employeeId :{
        type : Sequelize.STRING,
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
    createdAt : Sequelize.DATE,
    updatedAt : Sequelize.DATE


    })
    
  },

  async down (queryInterface, Sequelize) {
    //queryInterface.dropAllTables("Classes")
    
  }
};

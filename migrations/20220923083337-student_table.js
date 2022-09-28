'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Students",{
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
  },
  createdAt : Sequelize.DATE,
  updatedAt : Sequelize.DATE

    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Students")
  }
};

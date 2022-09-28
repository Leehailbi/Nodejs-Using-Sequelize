'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Teachers",{
      teacherName:{
        type : Sequelize.STRING,
        allowNull :false,
        required : true
        
    },
    staffId : {
        type : Sequelize.STRING,
        unique : true,
        required :true
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
        allowNull : false,
        required :true
    },
    classId: {
      type: Sequelize.INTEGER,
      allowNull: false,
  
    },
    createdAt : Sequelize.DATE,
    updatedAt : Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    //queryInterface.dropAllTables("Teachers")
  }
};


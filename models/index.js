

const Sequelize = require("sequelize")

const sequelize =require("../database/connection")

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Classes = require("../models/class")
db.Teachers = require("../models/teacher")

 // Teacher assocaiation Class
db.Classes.hasOne(db.Teachers, { foreignKey: "classId",as: "Teachers" })
db.Teachers.belongsTo(db.Classes, {
  foreignKey: "classId",
  as: "Classes",
})

// Class association Teacher

db.Teachers.hasOne(db.Classes,{
      foreignKey : "teacherId",
      constraints: false,
})

db.Classes.belongsTo(db.Teachers,{
      foreignKey : "teacherId",
      constraints: false,
})

module.exports = db
const express = require("express")

const {createStudent,getStudent,updateStudent,deleteStudent,getById} = require("../controllers/student")


const {validate} = require("../validations/validator")
const {studentRules} = require("../validations/validation")


const studentRouter = express.Router()


studentRouter.post("/api/createStudent",validate(studentRules()),createStudent)
studentRouter.get("/api/getStudent",getStudent)
studentRouter.get("/api/studentById/:id",getById)
studentRouter.patch("/api/updateStudent/:id",updateStudent)
studentRouter.delete("/api/deleteStudent/:id",deleteStudent)

module.exports = studentRouter
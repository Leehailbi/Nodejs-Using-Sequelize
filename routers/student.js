const express = require("express")

const {createStudent,getStudent,updateStudent,deleteStudent,getById} = require("../controllers/student")


const {validate} = require("../validations/validator")
const {studentRules} = require("../validations/validation")
const {authenticateToken} = require("../controllers/user")

const studentRouter = express.Router()


studentRouter.post("/api/createStudent",validate(studentRules()),authenticateToken,createStudent)
studentRouter.get("/api/getAll",authenticateToken,getStudent)
studentRouter.get("/api/getById/:id",authenticateToken,getById)
studentRouter.patch("/api/update/:id",updateStudent)
studentRouter.delete("/api/delete/:id",deleteStudent)

module.exports = studentRouter